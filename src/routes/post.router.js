const { getAll, create } = require('../controllers/post.controllers');
const express = require('express');

const postRouter = express.Router();

postRouter.route('/')
    .get(getAll)
    .post(create);


module.exports = postRouter;