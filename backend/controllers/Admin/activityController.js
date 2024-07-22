const categorySchema = require("../../models/categoryModel");
const mainSchema = require("../../models/mainModel");
const activitySchema = require("../../models/activityModel");
const formidable = require("formidable");
const {
	getStorage,
	ref,
	uploadBytes,
	getDownloadURL,
} = require("firebase/storage");
const app = require("../../config/firebase");

module.exports = {
	getActivities: async (req, res) => {
		try {
			const data = await activitySchema.find();

			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({
				message: "Internal Server Error",
			});
		}
	},
	
	addActivity: async (req, res) => {
		try {
			const {title,status,main,availability,startTime,endTime,description,proximity,priceHour,priceDay,capacity,location,packages} = req.body;
			if (![title,status,main,availability,startTime,endTime,description,proximity,priceHour,priceDay,capacity,location].every(Boolean) || packages.length < 1 || req.files.length < 1) {
				return res.status(400).json({ error: 'All fields are required and packages cannot be empty.' });
			}
			const storage = getStorage(app);
			const files = req.files;
			const uploadPromises = files.map(async (file) => {
				const fileName = `${Date.now()}_${file.originalname}`;
				const fileRef = ref(storage, `images/${fileName}`);

				await uploadBytes(fileRef, file.buffer);
				const publicUrl = await getDownloadURL(fileRef);

				return publicUrl;
			});

			const uploadedFiles = await Promise.all(uploadPromises);
			
			const newData = new activitySchema({
				title: title,
				mainCategory: main || 'Activities',
				status: status || 'Available',
				details: {
					description: description,
					capacity: capacity,
					price: {
						perDay: priceDay,
						perSession: priceHour,
					},
					schedule: {
						availability: availability,
						time: `${startTime} to ${endTime}`,
					},
					
					location: {
						place: location,
						proximityToAmenities: proximity,
					},
					images: uploadedFiles,
					packageIncludes: packages,
				},
			});
			const data = await newData.save();

			res.json({
				status: "success",
			});
		} catch (error) {
			console.error("Error uploading files:", error);
			res.status(500).json({ error: "Failed to upload files" });
		}
	},
	upadateActivity: async (req, res) => {
		const { title, status, main, id } = req.body;

		try {
			const data = await mainSchema.find({ title: main });
			const oldCategory = await categorySchema.findById(id);

			if (!(oldCategory.main_category === main)) {
				const addId = await mainSchema.updateOne(
					{ title: main },
					{ $push: { categories: id } }
				);
				const deleteId = await mainSchema.updateOne(
					{ title: oldCategory.main_category },
					{ $pull: { categories: id } }
				);
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
	deleteActivity: async (req, res) => {
		try {
			const data = await activitySchema.findByIdAndDelete({ _id: req.body.id });
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
function base64ImageToBlob(str) {
	// extract content type and base64 payload from original string
	var pos = str.indexOf(";base64,");
	var type = str.substring(5, pos);
	var b64 = str.substr(pos + 8);

	// decode base64
	var imageContent = atob(b64);

	// create an ArrayBuffer and a view (as unsigned 8-bit)
	var buffer = new ArrayBuffer(imageContent.length);
	var view = new Uint8Array(buffer);

	// fill the view, using the decoded base64
	for (var n = 0; n < imageContent.length; n++) {
		view[n] = imageContent.charCodeAt(n);
	}

	// convert ArrayBuffer to Blob
	var blob = new Blob([buffer], { type: type });

	return blob;
}
