'use strict'

var Article = require('../models/article')
var fs = require('fs');
var path = require('path');

var controller = {
  saveArticle: function(req, res) {
    var article = new Article();
    var params = req.body;

    article.name = params.name;
    article.content = params.content;
    article.date = params.date;
    article.title = params.title;
    article.resumen = params.resumen;

    article.save((error, articleStored) => {
        if (error) return res.status(500).send({message: error});


        if (!articleStored) return res.status(404).send({message: 'no se ha podido guardar el Artículo'});

        return res.status(200).send({article: articleStored});
    });

  },

  getArticle: function(req, res) {
    var articleId = req.params.id;

    if (articleId == null) return res.status(404).send({message: 'El artículo no existe'})

    Article.findById(articleId, (err, article) => {
      if (err) return res.status(500).send({message: 'No se ha encontrado el artículo'});

      if (!article) return res.status(404).send({message: 'El artículo no existe'});
      return res.status(200).send({article: article});
    });
  },

  getArticles: function(req, res) {

    Article.find({}).sort('-year').exec((err, articles) => {
      if (err) return res.status(500).send({message: 'Error al devolver los datos'});

      if (!articles) return res.status(404).send({message: 'No hay artículos para mostrar'});

      return res.status(200).send({articles: articles})
    });
  },

  updateArticle: function(req, res) {
    var articleId = req.params.id;
    var update = req.body;

    Article.findByIdAndUpdate(articleId, update, {new:true}, (err, articleUpdated) => {
      if (err) return res.status(500).send({message: 'Error al Actualizar'});

      if (!articleUpdated) return res.status(404).send({message: 'El artículo no existe'});

      return res.status(200).send({article: articleUpdated});
    });

  },

  deleteArticle: function(req, res){
    var articleId = req.params.id;


    Article.findByIdAndDelete(articleId, (err, articleoEliminado) => {
      if (err) return res.status(500).send({message: 'Error al Eliminar el artículo'});

      if (!articleoEliminado) return res.status(404).send({message: 'El artículo a Eliminar no existe'});

      return res.status(200).send({article: articleoEliminado});
    });
  },


  uploadImage: function(req, res){
    var articleId = req.params.id;
    var fileName = "imagen no subida...";

    if (req.files){
      var filePath = req.files.image.path;
      var fileSplit = filePath.split('\\');
      var fileName = fileSplit[1];
      var extSplit = fileName.split('\.');
      var fileExt = extSplit[1];

      console.log(fileExt);

      if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gift') {
        Article.findByIdAndUpdate(articleId, {image: fileName}, {new:true}, (err, articleUpdated) => {
          if (err) return res.status(500).send({message: 'Error al subir imagen'});

          if (!articleUpdated) return res.status(404).send({message: 'El artículo no existe'});

          return res.status(200).send({article: articleUpdated})
        });
      }else {
        fs.unlink(filePath, (err) => {
        return res.status(500).send({message: 'Extension no valida'});
        });
      }

  }
},



  getImageFile: function(req, res) {
    var file = req.params.image;
    var path_file = './uploads/'+file;

    fs.exists(path_file, (exists) => {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      }else {
          return res.status(200).send({
            message: 'No existe el archivo'
          });
      }
    });
  }


};


module.exports = controller;
