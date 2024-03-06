var express = require('express');
const buildBlogPosts = require('../utils/buildBlogPosts');
var router = express.Router();
const blogPosts = buildBlogPosts();
const title = 'My Blog'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title, blogPosts });
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const blogPost = blogPosts.find(post => post.id === parseInt(id));
  res.render('blogPost', { title, blogPost });
});

module.exports = router;
