export const router = require('express').Router();
const businessController = require('../controllers/businessController');
const aiController = require('../controllers/aiController');

// Route for submitting user input
router.post('/submit', businessController.processUserInput);

// Route for getting AI recommendations
router.get('/recommendations', aiController.getRecommendations);

module.exports = router;