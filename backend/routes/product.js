const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");
const { newProduct, getProducts, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.post('/admin/addProduct', isAuthenticatedUser, authorizeRoles('admin'), upload.array('images', 10),newProduct);
router.get('/listProducts', getProducts);
router.route('/product/:id')
.get(getSingleProduct)
.put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct)

module.exports = router;