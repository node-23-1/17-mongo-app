const express = require('express');
const userRouter = require('./user.router');
const countryRouter = require('./country.router');
const postRouter = require('./post.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter);
router.use('/countries', countryRouter);
router.use('/posts', postRouter);

module.exports = router;
