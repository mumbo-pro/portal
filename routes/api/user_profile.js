const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const UserProfile = require('../../models/UserProfile');

// @route   GET api/users/pofiles
// @desc    Get All User Profiles
// @access  Private
router.get('/', auth, (req, res) => {
  UserProfile.find()
    .sort({ date: -1 })
    .then(user_profiles => res.json(user_profiles));
});

// @route   POST api/users/profile
// @desc    Create A User Profile
// @access  Private
router.post('/', auth, (req, res) => {
  const userProfile = new UserProfile({
    name: req.body.name
  });

  userProfile.save().then(userProfile => res.json(userProfile));
});

// @route   DELETE api/users/profile/:id
// @desc    Delete A User Profile
// @access  Private
router.delete('/:id', auth, (req, res) => {
  UserProfile.findById(req.params.id)
    .then(userProfile => userProfile.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
