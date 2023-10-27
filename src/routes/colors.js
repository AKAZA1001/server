const express = require('express');
const router = express.Router();
const { getColorSuggestion } = require('../controllers/colors');

router.get('/suggestion', getColorSuggestion);

module.exports = router;
