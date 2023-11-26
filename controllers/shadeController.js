const shadeModel = require(`../models/shadeModel`);

exports.getAllShades = async (req, res) => {
	try {
		const ALLTOURS = await shadeModel.find();

		res.status(200).json({
			status: "success",
			results: ALLTOURS.length,
			data: {
				ALLTOURS,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err,
		});
	}
};

exports.getShade = async (req, res) => {
	try {
		const ONETOUR = await shadeModel.findOne({ Shade: req.params.id });
		// console.log(`The bullshit above is : ${req.params.id}`);
		res.status(200).json({
			status: "success",
			// results: ALLTOURS.length,
			data: {
				ONETOUR,
			},
		});
	} catch (err) {
		// console.log(err);
		res.status(404).json({
			status: "fail",
			message: err,
		});
	}
};

//	CHATGPT Test
exports.getColorsByShade = async (req, res) => {
	try {
		const { shadeValue } = req.params;

		const shade = await shadeModel.findOne({ Shade: shadeValue });

		if (!shade) {
			return res.status(404).json({
				status: "fail",
				message: "Shade not found",
			});
		}

		const colorsInShade = shade.Shade; // Assuming 'colors' is an array field in your schema

		res.status(200).json({
			status: "success",
			data: {
				Shade: colorsInShade,
			},
		});
	} catch (err) {
		res.status(500).json({
			status: "error",
			message: err.message,
		});
	}
};
