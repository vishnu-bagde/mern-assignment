const Transaction = require("../models/Transaction");
const Account = require("../models/Account");

exports.getTransactionsByAccountId = async (req, res) => {
  try {
    console.log(req.body)
    const accountId = parseInt(req.body.account_id);

    // Await the execution of the query
    const transactions = await Transaction.findOne({ account_id: accountId });

    return res.json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.getAccountsBelow5000 = async (req, res) => {
  try {
    const accounts = req.body.accounts;

    const filteredAccounts = [];

    for (const account of accounts) {
      const lowAmountAccounts = await Transaction.aggregate([
        {
          $match: {
            account_id: account,
            transactions: {
              $elemMatch: {
                amount: { $lt: 5000 },
              },
            },
          },
        },
        {
          $group: {
            _id: null,
            account_id: { $first: "$account_id" },
          },
        },
        {
          $project: {
            _id: 0,
            account_id: 1,
          },
        },
      ]);

      if (lowAmountAccounts.length > 0) {
        filteredAccounts.push(account);
      }
    }
    return res.json(filteredAccounts);
  } catch (error) {
    console.error("Error fetching low amount accounts:", error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.getDistinctProducts = async (req, res) => {
  try {
    const disntinctProducts = await Account.aggregate([
      {
        $unwind: "$products",
      },
      {
        $group: {
          _id: null,
          distinctProducts: { $addToSet: "$products" },
        },
      },
      {
        $project: {
          _id: 0,
          distinctProducts: 1,
        },
      },
    ])

    return res.json(disntinctProducts);
  } catch (error) {
    console.error("Error fetching distinct products:", error.message);
    res.status(500).json({ message: error.message });
  }
};
