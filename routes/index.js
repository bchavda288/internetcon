const express = require('express');
const path = require('path')
const router = express.Router();

router.get('/', (req, res) => {
      //res.sendFile('./app/index.html');
      res.sendFile(path.resolve('./app/index.html'));
 });

module.exports = router;
