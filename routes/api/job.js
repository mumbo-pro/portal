const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Job Model
const Job = require('../../models/Job');

// @route   GET api/jobs
// @desc    Get All Jobs
// @access  Public
router.get('/', (req, res) => {
  Job.find()
    .sort({ date: -1 })
    .then(jobs => res.json(jobs));
});

// @route   POST api/jobs
// @desc    Create An Job
// @access  Private
router.post('/', auth, (req, res) => {
  const newJob = new Job({
    name: req.body.name
  });

  newJob.save().then(job => res.json(job));
});

// @route   DELETE api/jobs/:id
// @desc    Delete A Job
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Job.findById(req.params.id)
    .then(job => job.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
