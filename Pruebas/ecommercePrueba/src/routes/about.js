const {Router} = require('express');

const router = Router();

router.get('/about', (req, res) => {
  res.render('about', {text: 'Todo bien'});
});

module.exports = router;