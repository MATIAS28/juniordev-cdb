'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var api = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });


api.post('/save-article', ArticleController.saveArticle);
api.get('/article/:id?', ArticleController.getArticle);
api.get('/articles', ArticleController.getArticles);
api.put('/article/:id', ArticleController.updateArticle);
api.delete('/article/:id', ArticleController.deleteArticle);
api.post('/upload-image/:id', multipartMiddleware, ArticleController.uploadImage);
api.get('/get-image/:image', ArticleController.getImageFile);
module.exports = api;
