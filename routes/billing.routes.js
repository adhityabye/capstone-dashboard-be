const express = require("express");
const router = express.Router();
const {
  createBilling,
  getBillings,
  updateBilling,
  deleteBilling,
} = require("../controllers/billing.controller");

// Create new billing
router.post("/", createBilling);

// Get all billing records
router.get("/", getBillings);

// Update a billing record
router.put("/:id", updateBilling);

// Delete a billing record
router.delete("/:id", deleteBilling);

module.exports = router;
