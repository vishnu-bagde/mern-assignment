
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/api/get-transaction', transactionController.getTransactionsByAccountId);
router.post('/api/low-amount-accounts', transactionController.getAccountsBelow5000);
router.get('/api/distinct-products', transactionController.getDistinctProducts);

module.exports = router;
