const express = require('express')
const categories = require('../coontrollers/categories')

const router = express.Router();

router.get('/category/:category',categories);
router.get('/productid/:productid',categories);


module.exports = router