// const cors = require('cors');
const express = require('express');

const auth = require('../routes/auth');
const home = require('../routes/home');
const blogs = require('../routes/blogs');
const users = require('../routes/users');
const pricings = require('../routes/pricings');
const newsfeed = require('../routes/newsFeed');
const contactus = require('../routes/contactus');
const teams = require('../modules/teams/routes/teams.route');
const careers = require('../modules/careers/routes/careers.route');
const projects = require('../modules/projects/routes/projects.route');
const testimonials = require('../modules/testimonials/routes/testimonials.route');

const error = require('../middleware/error');

module.exports = function (app) {
  // app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));

  app.use('/', home);
  app.use('/api/auth', auth);
  app.use('/api/blogs', blogs)
  app.use('/api/users', users);
  app.use('/api/teams', teams);
  app.use('/api/careers', careers);
  app.use('/api/projects', projects);
  app.use('/api/pricings', pricings);
  app.use('/api/newsfeed', newsfeed);
  app.use('/api/contactus', contactus);
  app.use('/api/testimonial', testimonials);

  app.use(error)
}
