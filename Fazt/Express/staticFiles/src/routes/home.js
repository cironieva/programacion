const {Router} = require('express');

const router = Router();

router.get('/about', (req, res) => {
  res.send('About Page');
});

router.get('/dashboard', (req, res) => {
  res.send('Dashboard Page');
});

module.exports = router;