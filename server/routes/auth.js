const express = require('express');
const router = express.Router();
const User = require('../models/User');
//отображение сайта
router.get('/login', (req, res) => {
  res.render('login');
});

// логин и тут же передресация на dashboard, в dashboard если учетка пришла учительская, то остается, если нет то выкидывает на главную
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && await user.comparePassword(password)) {
    req.session.userId = user._id;
    req.session.role = user.role;
    res.redirect('/dashboard');
  } else {
    res.redirect('/auth/login');
  }
});
//отображение регистрации
router.get('/register', (req, res) => {
  res.render('register');
});
//регистрация 
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('Username already exists. Please choose another one.');
    }

    // Create and save the new user
    const user = new User({ username, password, role });
    await user.save();
    res.redirect('/auth/login');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error.');
  }
});

// Не реализовано до конца, в плане не создана еще кнопка, позволяет выйти с регистрации
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
