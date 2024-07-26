const categorySchema = require("../../models/categoryModel");
const mainSchema = require("../../models/mainModel");
const zhisusaEventsShema = require("../../models/zhisusaEventsModel");
const formidable = require("formidable");
const {
	getStorage,
	ref,
	uploadBytes,
	getDownloadURL,
} = require("firebase/storage");
const app = require("../../config/firebase");

module.exports = {
	getZhisusaEvents: async (req, res) => {
		try {
			const data = await zhisusaEventsShema.find();

			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({
				message: "Internal Server Error",
			});
		}
	},

	addZhisusaEvent: async (req, res) => {
		try {
			const {
				title,
				status,
				date,
				description,
				proximity,
				price,
				time,
				capacity,
				location,
				terms,
				language,
				ageGroup,
				map,
				type
			} = req.body;
			if (
				![
					title,
					type,
					status,
					date,
					description,
					proximity,
					price,
					time,
					capacity,
					location,
					terms,
					language,
					ageGroup,
					map
				].every(Boolean) ||
				req.files.length < 1
			) {
				return res.status(400).json({
					error: "All fields are required and packages cannot be empty.",
				});
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
			console.log(req.body);

			const newData = new zhisusaEventsShema({
				title: title,
				status: status || "Available",
				type : type || "Music",
				details: {
					description: description,
					capacity: capacity,
					price: price,
					language : language,
					ageGroup : ageGroup,
					termsAndConditions : terms,
					schedule: {
						date: date,
						time: time,
					},

					location: {
						venue: location,
						proximityToAmenities: proximity,
						map : map
					},
					images: uploadedFiles,

				},
			});
			const data = await newData.save()

			res.json({
				status: "success",
			});
		} catch (error) {
			console.error("Error uploading files:", error);
			res.status(500).json({ error: "Failed to upload files" });
		}
	},
	upadateZhisusaEvent: async (req, res) => {
		try {
			const {
				title,
				status,
				date,
				description,
				proximity,
				price,
				time,
				capacity,
				location,
				terms,
				language,
				ageGroup,
				map,
				type,
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

			const updateData = await zhisusaEventsShema.findOne({ _id: id });
			if (updateData) {
				updateData.title = title || updateData.title;
				updateData.status = status || updateData.status;
				updateData.type = type || updateData.type;
				updateData.details.schedule.time =
					time || updateData.details.schedule.time;
				updateData.details.schedule.date =
					date || updateData.details.schedule.date;
				updateData.description = description || updateData.details.description;
				updateData.details.capacity = capacity || updateData.details.capacity;
				updateData.details.price =
					price || updateData.details.price;
				updateData.details.ageGroup =
					ageGroup || updateData.details.ageGroup;
				updateData.details.termsAndConditions =
					terms || updateData.details.termsAndConditions;
				updateData.details.language =
					language || updateData.details.language;
				updateData.details.location.place =
					location || updateData.details.location.place;
				updateData.details.location.map =
					map || updateData.details.location.map;
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
	deleteZhisusaEvent: async (req, res) => {
		try {
			const data = await zhisusaEventsShema.findByIdAndDelete({
				_id: req.body.id,
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
};
