const Joi = require('joi');
const mongoose = require('mongoose');

const newsFeedSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  slug: {
    type: String,
    trim: true,
  },
  imageUri: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: Array,
    required: true
  },
  readMin: {
    type: Number,
    required: true,
    min: 1,
    max: 255
  },
  publishedBy: {
    type: String,
    trim: true,
    required: true,
    maxlength: 120
  },
  isActive: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  updatedAt: {
    type: Date,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  deletedAt: {
    type: Date,
  }
});

const NewsFeed = mongoose.model('NewsFeed', newsFeedSchema);

const validateNewsFeedInfo = (reqNewsFeedInfo) => {
  const schema = Joi.object({
    tag: Joi.array().required(),
    title: Joi.string().required(),
    imageUri: Joi.string().allow(''),
    description: Joi.string().required(),
    publishedBy: Joi.string().max(120).required(),
    readMin: Joi.string().min(1).max(255).required(),
  });
  return schema.validate(reqNewsFeedInfo);
}

exports.NewsFeed = NewsFeed;
exports.newsFeedSchema = newsFeedSchema;
exports.validate = validateNewsFeedInfo;
