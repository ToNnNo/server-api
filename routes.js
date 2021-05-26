import express from 'express';
import home from "./controller/HomeController.js";
import product from "./controller/ProductController.js";
import authenticate from "./controller/AuthenticationController.js";
import isAuthenticated from './middleware/isAuthenticate.js';

const router = express.Router();
export default router;

router.get('/', home.index);

router.post('/signin', authenticate.signIn);

router.get('/product', product.index);
router.get('/product/:id', product.detail);
router.post('/product', isAuthenticated, product.add);
router.put('/product/:id', isAuthenticated, product.update);
router.delete('/product/:id', isAuthenticated, product.delete);
