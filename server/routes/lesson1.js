const express = require('express');
const router = express.Router();

//отображение сайта
router.get('/lesson1', (req, res) => {
  res.render('lesson1'); // Отображение EJS представления lesson1.ejs
});

module.exports = router;
