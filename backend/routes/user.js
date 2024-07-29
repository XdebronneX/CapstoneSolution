const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getProfile, updateProfile, updatePassword, forgotPassword, resetPassword, getUsers, updateUser, accountDeprovision } = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth")
const upload = require("../utils/multer");

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);

router.get('/me', isAuthenticatedUser, getProfile);
router.put('/me/update', isAuthenticatedUser, upload.single("avatar"), updateProfile);
router.patch('/me/changePassword', isAuthenticatedUser, updatePassword);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);

//** Admin control */
router.route('/admin/all/users').get(isAuthenticatedUser, authorizeRoles('admin'), getUsers);
router.patch('/admin/account/deprovision/:id', isAuthenticatedUser, authorizeRoles('admin'), accountDeprovision);
router.route('/admin/users/:id').patch(isAuthenticatedUser, authorizeRoles('admin'), updateUser)

module.exports = router;