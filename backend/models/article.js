'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  name: String,
  content: String,
  title: String,
  resumen: String,
  date: String
});



module.exports = mongoose.model('Article', ArticleSchema);
