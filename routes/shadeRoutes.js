const express = require("express");
const shadeController = require(`../controllers/shadeController`);

const router = express.Router();

router.route("/").get(shadeController.getAllShades);
// 	.post(shadeController.createShade)

router.route("/:id").get(shadeController.getShade);
// 	.patch(shadeController.updateShade)
// 	.delete(shadeController.deleteShade);

// New route for fetching colors by shade value
router.route("/colors/:shadeValue").get(shadeController.getColorsByShade);

module.exports = router;
