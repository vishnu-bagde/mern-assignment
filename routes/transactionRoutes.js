
const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/api/get-transaction', transactionController.getTransactionsByAccountId);
router.get('/api/low-amount-accounts', transactionController.getAccountsBelow5000);
router.get('/api/distinct-products', transactionController.getDistinctProducts);

module.exports = router;
