const ProductModel = require("../models/product");
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/errorHandler");
const mongoose = require("mongoose");

//** Admin control */
// exports.newProduct = async (req, res, next) => {
//   try {
//     // Check if the project name already exists in the database
//     const existingProduct = await ProductModel.findOne({
//       projectTitle: req.body.projectTitle,
//     });

//     if (existingProduct) {
//       return res.status(400).json({ message: "Project Title already exists!" });
//     }

//     let images = req.body.images || []; // Ensure images is an array

//     let imagesLinks = [];

//     // Check if images is an array or a single string
//     if (typeof images === "string") {
//       // Handle case where a single image string is provided
//       const result = await cloudinary.v2.uploader.upload(images, {
//         folder: "products",
//       });
//       imagesLinks.push({
//         public_id: result.public_id,
//         url: result.secure_url,
//       });
//     } else {
//       // Handle case where multiple images are provided
//       for (let i = 0; i < images.length; i++) {
//         const result = await cloudinary.v2.uploader.upload(images[i], {
//           folder: "products",
//         });
//         imagesLinks.push({
//           public_id: result.public_id,
//           url: result.secure_url,
//         });
//       }
//     }

//     req.body.images = imagesLinks;
//     req.body.user = req.user.id;

//     const product = await ProductModel.create(req.body);

//     res.status(201).json({
//       success: true,
//       product,
//     });
//   } catch (error) {
//     console.log(error);
//     return next(new ErrorHandler(error.message, 500));
//   }
// };

exports.newProduct = async (req, res, next) => {
  try {
    // Check if the project name already exists in the database
    const existingProduct = await ProductModel.findOne({
      projectTitle: req.body.projectTitle,
    });

    if (existingProduct) {
      return res.status(400).json({ message: "Project Title already exists!" });
    }

    let images = req.body.images || []; // Ensure images is an array

    if (typeof images === "string") {
      images = [images]; // Convert single image string to array
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      try {
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: "products",
        });

        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      } catch (uploadError) {
        console.error(`Failed to upload image: ${images[i]}`, uploadError);
        // Handle individual image upload failure
        continue;
      }
    }

    if (imagesLinks.length === 0) {
      console.warn('No images were successfully uploaded.');
    }

    req.body.images = imagesLinks;
    req.body.user = req.user.id;

    const product = await ProductModel.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error('Error creating product:', error);
    return next(new ErrorHandler(error.message, 500));
  }
};

exports.updateProduct = async (req, res, next) => {
  let product = await ProductModel.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  // Check if the user is activated
  if (!product.activation) {
    return next(new ErrorHandler("Product is not available!", 403));
  }

  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting images associated with the product

    for (let i = 0; i < product.images.length; i++) {
      const result = await cloudinary.v2.uploader.destroy(
        product.images[i].public_id
      );
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,

        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,

    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,

    product,
  });
};

// exports.deleteProduct = async (req, res, next) => {
//   try {
//     const product = await ProductModel.findById(req.params.id);

//     if (!product) {
//       return next(new ErrorHandler("Product not found", 404));
//     }

//     await product.deleteOne();

//     res.status(200).json({
//       success: true,
//       message: "Product deleted",
//     });
//   } catch (error) {
//     console.log(error);
//     next(new ErrorHandler(error.message, 500));
//   }
// };

exports.deactivateProduct = async (req, res, next) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      { activation: false },
      { new: true }
    );
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
      success: true,
      message: "Deactivated Success!",
      product,
    });
  } catch (error) {
    console.log(error);
    next(
      new ErrorHandler("An error occurred while disabling the product", 500)
    );
  }
};

exports.reactivateProduct = async (req, res, next) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      { activation: true },
      { new: true }
    );
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
      success: true,
      message: "Reactivated Success!",
      product,
    });
  } catch (error) {
    console.log(error);
    next(
      new ErrorHandler("An error occurred while disabling the product", 500)
    );
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const productsCount = await ProductModel.countDocuments();
    const products = await ProductModel.find();

    res.status(200).json({
      success: true,
      productsCount,
      products,
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

exports.getAdminProducts = async (req, res, next) => {
  try {
    const productsCount = await ProductModel.countDocuments();
    const products = await ProductModel.find();

    res.status(200).json({
      success: true,
      productsCount,
      products,
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 500));
  }
};

exports.getProductDetails = async (req, res, next) => {
  try {
      const product = await ProductModel.findById(req.params.id);

      if (!product) {
          return next(
              new ErrorHandler(`Product not found with id: ${req.params.id}`)
          );
      }
      // Check if the user is activated
      if (!product.activation) {
        return next(new ErrorHandler("Product is not available!", 403));
      }

      res.status(200).json({
          success: true,
          product,
      });
  } catch (error) {
      // Handle errors here
      console.log(error);
      return next(new ErrorHandler('Error while fetching product details'));
  }
};
