const categorySchema = require("../../models/categoryModel");
const mainSchema = require("../../models/mainModel");
module.exports = {
	getCategories: async (req, res) => {
		try {
			const data = await categorySchema.find();

			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({
				message: "Internal Server Error",
			});
		}
	},
	addCategory: async (req, res) => {
		const { title, status, main } = req.body;
		try {
			const newData = new categorySchema({
				title: title,
				status: status,
				main_category: main,
				types: [],
			});
			const data = await newData.save();
			
			const addToMain = await mainSchema.updateOne({title:main},{$push:{categories:data?.['_id'].toString()}})
			console.log(addToMain);
			
			res.json({
				status: "success",
			});
		} catch (error) {
			res.json({
				status: "failed",
			});
		}
	},
	upadateCategory: async (req, res) => {
		const { title, status, main, id } = req.body;

		try {
			const data = await mainSchema.find({title:main})
			const oldCategory = await categorySchema.findById(id)
			
			if(!(oldCategory.main_category === main)){
				const addId = await mainSchema.updateOne({title:main},{$push:{categories:id}})
				const deleteId = await mainSchema.updateOne({title:oldCategory.main_category},{$pull : {categories : id}})

			}
			
			const updateData = await categorySchema.findByIdAndUpdate(id, {
				title: title,
				status: status,
				main_category: main,
			});
			
		
			
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
			const addToMain = await mainSchema.updateOne({title:req.body.main},{$pull : {categories : req.body.id}})
			res.json({
				status: "success",
			});
		} catch (error) {
			res.json({
				status: "failed",
			});
		}
	},
};
