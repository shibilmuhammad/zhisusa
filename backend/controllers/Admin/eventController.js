const categorySchema = require("../../models/categoryModel");
const mainSchema = require("../../models/mainModel");
const eventSchema = require("../../models/eventModel");
const formidable = require("formidable");
const {
	getStorage,
	ref,
	uploadBytes,
	getDownloadURL,
} = require("firebase/storage");
const app = require("../../config/firebase");

module.exports = {
	getEvents: async (req, res) => {
		try {
			const data = await eventSchema.find();

			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({
				message: "Internal Server Error",
			});
		}
	},

	addEvent: async (req, res) => {
		try {
			const {
				title,
				status,
				main,
				description,
				proximity,
				price,
				capacity,
				location,
				packages,
				amenities,
			} = req.body;
			if (
				![
					title,
					status,
					main,
					description,
					proximity,
					price,
					capacity,
					location,
					packages,
					amenities,
				].every(Boolean) ||
				packages.length < 1 ||
				req.files.length < 1
			) {
				return res.status(400).json({
					error: "All fields are required and packages cannot be empty.",
				});
			}
			let amenitiesList = JSON.parse(amenities)
			amenitiesList.forEach((pkg) => {
				pkg.items = pkg.items.filter((item) => item.title.trim() !== "");
			});
			amenitiesList = amenitiesList.filter((pkg) => pkg.name.trim() !== "");
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

			const newData = new eventSchema({
				title: title,
				mainCategory: main || "Events",
				status: status || "Available",
				details: {
					description: description,
					capacity: capacity,
					price: price,

					location: {
						place: location,
						proximityToAmenities: proximity,
					},
					images: uploadedFiles,
					eventOptions: packages,
					packages : amenitiesList
				},
			});
			const data = await newData.save();
			const addToMain = await categorySchema.updateOne(
				{ title: main },
				{ $push: { types: data?.["_id"].toString() } }
			);

			res.json({
				status: "success",
			});
		} catch (error) {
			console.error("Error uploading files:", error);
			res.status(500).json({ error: "Failed to upload files" });
		}
	},
	upadateEvent: async (req, res) => {
		try {
			const {
				title,
					status,
					main,
					description,
					proximity,
					price,
					capacity,
					location,
					packages,
					amenities,
				id,
				image_links,
			} = req.body;
			const storage = getStorage(app);
			const files = req.files;
			if (files.length > 0) {
				const uploadPromises = files.map(async (file) => {
					const fileName = `${Date.now()}_${file.originalname}`;
					const fileRef = ref(storage, `images/${fileName}`);

					await uploadBytes(fileRef, file.buffer);
					const publicUrl = await getDownloadURL(fileRef);

					return publicUrl;
				});

				var uploadedFiles = await Promise.all(uploadPromises);
			}
			console.log(req.body);
			let amenitiesList = JSON.parse(amenities)
			amenitiesList.forEach((pkg) => {
				pkg.items = pkg.items.filter((item) => item.title.trim() !== "");
			});
			amenitiesList = amenitiesList.filter((pkg) => pkg.name.trim() !== "");

			const updateData = await eventSchema.findOne({ _id: id });
			if (updateData) {
				updateData.title = title || updateData.title;
				updateData.status = status || updateData.status;
				updateData.mainCategory = main || updateData.mainCategory;
				updateData.details.description= description || updateData.details.description;
				updateData.details.capacity = capacity || updateData.details.capacity;
				updateData.details.price =
					price || updateData.details.price
				updateData.details.eventOptions =
					packages || updateData.details.eventOptions;
				updateData.details.packages =
					amenitiesList || updateData.details.packages;
				updateData.details.location.place =
					location || updateData.details.location.place;
				updateData.details.location.proximityToAmenities =
					proximity || updateData.details.location.proximityToAmenities;
				if (image_links) {
					uploadedFiles
						? (updateData.details.images = [
								...image_links.split(","),
								...uploadedFiles,
						  ])
						: (updateData.details.images = image_links.split(","));
				} else {
					uploadedFiles
						? (updateData.details.images = uploadedFiles)
						: (updateData.details.images = []);
				}
			}
			await updateData.save();

			res.json({
				status: "success",
			});
		} catch (error) {
			console.error("Error uploading files:", error);
			res.status(500).json({ error: "Failed to upload files" });
		}
	},
	deleteEvent: async (req, res) => {
		try {
			const data = await eventSchema.findByIdAndDelete({ _id: req.body.id });
			const addToMain = await categorySchema.updateOne(
				{ title: req.body.main },
				{ $pull: { types: req.body.id } }
			);
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
