const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Test = require('../models/Test');
//отображение сайта
router.get('/', (req, res) => {
  res.render('index');
});

//это я не знаю
router.get('/dashboard', async (req, res) => {
  const user = await User.findById(req.session.userId).populate('results');
  res.render('dashboard', { user });
});

//это я не знаю
router.get('/results', async (req, res) => {
  if (req.session.role === 'teacher') {
    const students = await User.find({ role: 'student' }).populate('results');
    res.render('results', { students });
  } else {
    const user = await User.findById(req.session.userId).populate('results');
    res.render('results', { user });
  }
});

module.exports = router;
