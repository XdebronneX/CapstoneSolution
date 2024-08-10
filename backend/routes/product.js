const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");
const { newProduct, getAdminProducts, getProducts,getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.post('/admin/addProduct', isAuthenticatedUser, authorizeRoles('admin'), upload.array('images', 10),newProduct);
router.get('/admin/listProducts', isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router.route('/product/:id')
.get(getSingleProduct)
.put(isAuthenticatedUser, authorizeRoles("admin"), upload.array('images', 10), updateProduct)
.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)

router.get('/listProducts', getProducts);
// router.get('/singleProduct/:id', getSingleProduct);
module.exports = router;