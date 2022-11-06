const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },

  description: {
    type: String,
    required: true,
  },

  tags: {
    type: [String],
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  state:{
    type: String,
    default:'draft', enum: ['draft', 'published']
  },

  readCount: {
    type: Number,
    default: 0,
  },

  readingTime: {
    type: Number,
  },

  body:{
    type: String,
    required: true,
  },

})


module.exports = mongoose.model('Blog', BlogSchema);
