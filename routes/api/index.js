const router = require("express").Router();
const vendorRoutes = require("./vendor");

// Book routes
router.use("/vendors", vendorRoutes);

module.exports = router;
