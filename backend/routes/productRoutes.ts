import express from 'express';
const router = express.Router();

import * as productController from '../controllers/ProductController';
// Product routes
router.route('/').post(productController.createProduct).get(productController.getAllProducts);
router.route('/:productId/bid').post(productController.placeBid);
router.route('/:productId/bidHistory').get(productController.getBidHistory);
router.route('/:productId/model').get(productController.getModel);
router.route('/getProductCookie').post(productController.getCookie);


export default router;
