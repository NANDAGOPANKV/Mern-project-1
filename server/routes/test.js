const express = require('express');
const router = express.Router();


// import controlls
const { getTest } = require('../controller/test');

// import middleware


// api routes
router.get('/test', getTest);

// export
module.exports = router;
