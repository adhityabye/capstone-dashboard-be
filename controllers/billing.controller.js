const Billing = require("../models/billing.model");

const createBilling = async (req, res) => {
  try {
    const { user_id, halteMasuk, waktuMasuk } = req.body;
    const newBilling = new Billing({
      user_id,
      halteMasuk,
      waktuMasuk: new Date(waktuMasuk),
    });
    await newBilling.save();
    res.status(201).json(newBilling);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error creating billing", error });
  }
};

const getBillings = async (req, res) => {
  try {
    const billings = await Billing.find().populate("user_id", "name email");
    res.status(200).json(billings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving billings", error });
  }
};

const updateBilling = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedBilling = await Billing.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (!updatedBilling) {
      return res.status(404).json({ message: "Billing not found" });
    }
    res.status(200).json(updatedBilling);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error updating billing", error });
  }
};

const deleteBilling = async (req, res) => {
  try {
    const deletedBilling = await Billing.findByIdAndDelete(req.params.id);
    if (!deletedBilling) {
      return res.status(404).json({ message: "Billing not found" });
    }
    res.status(200).json({
      message: "Billing deleted successfully",
      deletedBilling,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting billing", error });
  }
};

module.exports = {
  createBilling,
  getBillings,
  updateBilling,
  deleteBilling,
};
