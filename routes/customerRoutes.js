
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/api/active-customers', customerController.getActiveCustomers);

module.exports = router;
