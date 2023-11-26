const mongoose = require("mongoose");

const shadeSchema = new mongoose.Schema({
	_9502: {
		type: Number,
	},
	Shade: {
		type: String,
	},
	Party: {
		type: Number,
	},
	Count: {
		type: Number,
	},
	Navy: {
		type: Number,
	},
	Rubine: {
		type: Number,
	},
	Brown: {
		type: Number,
	},
	_7GD: {
		type: Number,
	},
	_10GN: {
		type: Number,
	},
	NewSR: {
		type: Number,
	},
	B1k2RC: {
		type: Number,
	},
	BrillRed: {
		type: Number,
	},
	RVFBL: {
		type: Number,
	},
	Orange: {
		type: Number,
	},
	Pink: {
		type: Number,
	},
	SC_RR: {
		type: Number,
	},
	Vio_3R: {
		type: Number,
	},
	Ref_Shade: {
		type: Number,
	},
	Blue_ERA: {
		type: Number,
	},
	Red_G: {
		type: Number,
	},
	White_R: {
		type: Number,
	},
});

const Shade = mongoose.model("shades", shadeSchema);

// const testShade = new Shade({
// 	Shade: "A69",
// 	_9502: 0.5,
// });

// testShade
// 	.save()
// 	.then((doc) => {
// 		console.log("Data saved to 'shades' collection:", doc);
// 	})
// 	.catch((err) => {
// 		console.log(`Error Occurred: ${err}`);
// 	});

module.exports = Shade;
