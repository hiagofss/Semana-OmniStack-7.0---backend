const express = require('express');
const multer = require('multer');
const uploadsConfig = require('../src/config/upload');
const PostController = require('../src/constrollers/PostController');
const LikeController = require('../src/constrollers/LikeController');

const routes = new express.Router();
const upload = multer(uploadsConfig);

routes.get('/posts', PostController.index);
routes.post('/post', upload.single('image'), PostController.store);
routes.post('/post/:id/like', LikeController.store);


module.exports = routes;
