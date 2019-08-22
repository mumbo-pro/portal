const express = require('express');
const router = express.Router();

// Idea Model
const Idea = require('../models/Idea');

router.get('/', (req, res) => {
  Idea.find().then(
      ideas => res.json(ideas));
});


router.post('/', (req, res) => {
  const newIdea = new Idea({
    title: req.body.title,
    body: req.body.body
  });

  newIdea.save().then(item => res.json(item));
});


router.delete('/:id', (req, res) => {
  Idea.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;