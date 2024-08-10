const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getProfile, updateProfile, updatePassword, forgotPassword, resetPassword, getUsers, getUserDetails,updateUser, deactivateUser, activateUser } = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth")
const upload = require("../utils/multer");

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);

router.get('/me', isAuthenticatedUser, getProfile);
router.put('/me/update', isAuthenticatedUser, upload.single("avatar"), updateProfile);
router.put('/me/changePassword', isAuthenticatedUser, updatePassword);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);

//** Admin control */
router.route('/admin/all/users').get(isAuthenticatedUser, authorizeRoles('admin'), getUsers);
router.put('/admin/account/deactivated/:id', isAuthenticatedUser, authorizeRoles('admin'), deactivateUser);
router.put('/admin/account/activated/:id', isAuthenticatedUser, authorizeRoles('admin'), activateUser);
router.route('/admin/users/:id')
.get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails)
.patch(isAuthenticatedUser, authorizeRoles("admin"), updateUser)

module.exports = router;