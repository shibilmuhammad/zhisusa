const categorySchema = require("../../models/categoryModel");
module.exports = {
	getCategories: async (req, res) => {
		try {
			const count = await categorySchema.aggregate([
				{
					$lookup: {
						from: "projects",
						let: { title: "$title" },
						pipeline: [
							{ $match: { $expr: { $eq: ["$$title", "$category"] } } },
						],
						as: "project_count",
					},
				},
				{ $addFields: { project_count: { $size: "$project_count" } } },
			]);

			res.json(count);
			console.log(count);
		} catch (error) {
			res.json({
				status: "failed",
			});
		}
	},
	addCategory: async (req, res) => {
		const { title, status,main } = req.body;
		console.log(req.body);
		try {
			const newData = new categorySchema({
				title: title,
				status: status,
				main_category: main,
				types : []
			});
			await newData.save()
			res.json({
				status: "success",
			});
			
		} catch (error) {
			res.json({
				status: "failed",
			});
		}
	},
	deleteCategory: async (req, res) => {
		try {
			const data = await categorySchema.findByIdAndDelete({ _id: req.body.id });
			const newData = await categorySchema.find();
			res.json(newData);
		} catch (error) {
			res.json({
				status: "failed",
			});
		}
	},
};
