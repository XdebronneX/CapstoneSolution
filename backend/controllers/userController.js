const UserModel = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const cloudinary = require("cloudinary");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendtoMail");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const mongoose = require("mongoose");

exports.registerUser = async (req, res, next) => {
  try {
    // Check if the email already exists in the database
    const existingUser = await UserModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ message: "Email address already exists!" });
    }

    const { firstname, lastname, email, password } = req.body;

    // Create a new user if the email is unique
    const user = await UserModel.create({
      firstname,
      lastname,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "User registration failed" });
  }
};

// exports.registerUser = async (req, res, next) => {
//     const session = await mongoose.startSession();
//     session.startTransaction();
  
//     try {
//       // Check if the email already exists in the database
//       const existingUser = await UserModel.findOne({ email: req.body.email });
  
//       if (existingUser) {
//         await session.abortTransaction();
//         session.endSession();
//         return res.status(400).json({ message: "Email address already exists!" });
//       }
  
//       const { firstname, lastname, email, password } = req.body;
  
//       // Create a new user if the email is unique
//       const user = await UserModel.create([{ firstname, lastname, email, password }], { session });
  
//       await session.commitTransaction();
//       session.endSession();
  
//       res.status(201).json({
//         success: true,
//         user,
//       });
//     } catch (error) {
//       await session.abortTransaction();
//       session.endSession();
//       console.error(error);
//       res.status(500).json({ message: "User registration failed" });
//     }
//   };

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler("Please enter email & password", 400));
    }

    // Finding the user in the database
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 400));
    }

    // Check if the user is activated
    if (!user.activation) {
      return next(new ErrorHandler("You don't have access!", 403));
    }

    // Checks if the password is correct
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    sendToken(user, 200, res);
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler("User login failed", 500));
  }
};

exports.logoutUser = async (req, res, next) => {
  try {
    // Clear the token cookie
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    // Send success response
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    // Log the error for debugging purposes (optional)
    console.error(error);

    // Pass any unexpected errors to the error handling middleware
    next(new ErrorHandler("Logout failed", 500));
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    return next(new ErrorHandler("Failed to get user profile", 500));
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const newUserData = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };

    /** Update Avatar */
    if (req.body.avatar !== "") {
      const user = await UserModel.findById(req.user.id);

      // Check if the user has an existing avatar
      if (user.avatar && user.avatar.public_id) {
        const image_id = user.avatar.public_id;

        // Destroy the previous avatar
        await cloudinary.v2.uploader.destroy(image_id);
      }

      // Upload the new avatar
      const uploadResult = await cloudinary.v2.uploader.upload(
        req.body.avatar,
        {
          folder: "avatars",
          width: 150,
          crop: "scale",
        },
        // (err, res) => {
        //   // console.log(err, res);
        // }
      );

      newUserData.avatar = {
        public_id: uploadResult.public_id,
        url: uploadResult.secure_url,
      };
    }

    // Update the user profile
    const user = await UserModel.findByIdAndUpdate(req.user.id, newUserData, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return next(new ErrorHandler("User not found", 404));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler("Failed to update user profile", 500));
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id).select("password");
    // Check previous user password
    const isMatched = await user.comparePassword(req.body.oldPassword);
    if (!isMatched) {
      return next(new ErrorHandler("Old password is incorrect!", 400));
    }
    user.password = req.body.password;
    await user.save();
    sendToken(user, 200, res);
  } catch (error) {
    // Handle any errors that occur during the password update
    console.error(error);
    return next(new ErrorHandler("Failed to update your password", 500));
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    // Find user by email
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return next(new ErrorHandler("User not found with this email", 400));
    }

    // Generate and set password reset token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // Construct reset URL
    const resetUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

    // HTML content for the email
    const emailContent = `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 15px; justify-content: center; align-items: center; height: 40vh;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: center;">
            <h1 style="font-size: 24px; color: #333;">Password Reset Request</h1>
            <p style="font-size: 16px; color: #555;">Hello ${user.firstname},</p>
            <p style="font-size: 16px; color: #555;">You have requested to reset your password. To proceed, please click the button below:</p>
            <p style="text-align: center;">
              <a href="${resetUrl}" style="display: inline-block; background-color: #007bff; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 10px; font-size: 16px;" target="_blank">Reset Password</a>
            </p>
            <p style="font-size: 16px; color: #555;">If you didn't request this, you can safely ignore this email.</p>
          </div>
        </div>
      `;

    // Send the email
    try {
      await sendEmail(
        user.email,
        "Password Recovery Request",
        emailContent,
        true
      );

      res.status(200).json({
        success: true,
        message: `Email sent to: ${user.email}`,
      });
    } catch (emailError) {
      // Reset password fields if email fails to send
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });

      return next(
        new ErrorHandler("There was an error sending the email", 500)
      );
    }
  } catch (error) {
    console.error(error);
    next(
      new ErrorHandler("An error occurred while processing your request", 500)
    );
  }
};

exports.resetPassword = async (req, res, next) => {
  // Hash URL token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  try {
    const user = await UserModel.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(
        new ErrorHandler(
          "Password reset token is invalid or has been expired",
          400
        )
      );
    }

    const newPassword = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (newPassword !== confirmPassword) {
      return next(new ErrorHandler("Passwords do not match", 400));
    }

    // Setup new password
    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Password reset successfully!",
    });
  } catch (error) {
    // return next(new ErrorHandler(error.message, 500));
    console.log(error);
    return next(new ErrorHandler("Error reset password!", 500));
  }
};

//** Admin control */
exports.getUsers = async (req, res, next) => {
  try {
    const users = await UserModel.find();
    const totalUsers = await UserModel.countDocuments();
    return res.status(200).json({
      success: true,
      totalUsers,
      users,
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler("Error fetching user data!", 500));
  }
};

exports.updateUser = async (req, res, next) => {
    try {
        const newUserData = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            role: req.body.role,
        };

        const user = await UserModel.findByIdAndUpdate(req.params.id, newUserData, {
            new: true,
            runValidators: true,
        });

        if (!user) {
            // If no user was found with the provided id, return an error response.
            return next(new ErrorHandler("User not found", 404));
        }

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        // Handle errors here
        console.error(error);
    return next(new ErrorHandler("An error occurred while updating the user", 500));
    }
};

exports.accountDeprovision = async (req, res, next) => {
  try {
    const { activation } = req.body;

    // Update only the activation field
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      { activation },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      // If no user was found with the provided id, return an error response.
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const activationMessage = activation ? "activated!" : "deactivated!";

    res.status(200).json({
      success: true,
      message: `User ${activationMessage} successfully!`,
      user,
    });
  } catch (error) {
    // Handle errors here
    console.log(error);
    return next(new ErrorHandler("Error reset password!", 500));
  }
};
