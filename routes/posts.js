var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    res.status(err ? 400 : 200).send(err || posts);
  });
});

router.post('/', (req, res) => {
	console.log(req.body);
  Post.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.route('/likes/:id')
    .put((req, res) => {
      Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, post) => {
          res.status(err ? 400 : 200).send(err || post);
      });
  });

router.route('/dislikes/:id')
    .put((req, res) => {
      Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, post) => {
          res.status(err ? 400 : 200).send(err || post);
      });
  });

module.exports = router;