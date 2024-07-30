const categorySchema = require("../../models/categoryModel");
const mainSchema = require("../../models/mainModel");
const zhisusaEventsShema = require("../../models/zhisusaEventsModel");
const formidable = require("formidable");
const sharp = require('sharp')
const {
	getStorage,
	deleteObject,
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
					language,
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
				const optimizedBuffer = await sharp(file.buffer)
				.resize(800, 800, {
					fit: sharp.fit.inside,
					withoutEnlargement: true,
				})
				.jpeg({ quality: 80 })
				.toBuffer();
				const fileName = `${Date.now()}_${file.originalname}`;
				const fileRef = ref(storage, `zhisusaEvents/${fileName}`);

				await uploadBytes(fileRef, optimizedBuffer);
				const publicUrl = await getDownloadURL(fileRef);

				return publicUrl;
			});

			const uploadedFiles = await Promise.all(uploadPromises);
			console.log(req.body);

			const newData = new zhisusaEventsShema({
				title: title,
				status: status || "Available",
				type : type || "Music",
				eventId : await getNextUniqueId(),
				details: {
					description: description,
					capacity: capacity,
					price: price,
					language : language,
					ageGroup : ageGroup || '',
					termsAndConditions : terms || '',
					schedule: {
						date: date,
						time: time,
					},

					location: {
						venue: location,
						proximityToAmenities: proximity,
						map : map || ''
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
					const optimizedBuffer = await sharp(file.buffer)
					.resize(800, 800, {
						fit: sharp.fit.inside,
						withoutEnlargement: true,
					})
					.jpeg({ quality: 80 })
					.toBuffer();
					const fileName = `${Date.now()}_${file.originalname}`;
					const fileRef = ref(storage, `zhisusaEvents/${fileName}`);
	
					await uploadBytes(fileRef, optimizedBuffer);
					const publicUrl = await getDownloadURL(fileRef);
	
					return publicUrl;
				});

				var uploadedFiles = await Promise.all(uploadPromises);
			}
			console.log(req.body);

			const updateData = await zhisusaEventsShema.findOne({ _id: id });
			const commonItems = JSON.parse(image_links)
				.filter((item) => !updateData?.details?.images.includes(item));
			if (commonItems.length > 0) {
				const deletePromises = commonItems.map(async (link) => {
					const fileRef = ref(storage, link);

					const deleteFile = await deleteObject(fileRef);

					return deleteFile;
				});

				await Promise.all(deletePromises);
			}
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
				updateData.details.location.venue =
					location || updateData.details.location.place;
				updateData.details.location.map =
					map || updateData.details.location.map;
				updateData.details.location.proximityToAmenities =
					proximity || updateData.details.location.proximityToAmenities;
				if (image_links) {
					uploadedFiles
						? (updateData.details.images = [
								...JSON.parse(image_links),
								...uploadedFiles,
						  ])
						: (updateData.details.images = JSON.parse(image_links));
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
			const data = await zhisusaEventsShema.findOne({ _id: req.body.id });

			const storage = getStorage(app);

			const deletePromises = data?.details?.images?.map(async (link) => {
				const fileRef = ref(storage, link);

				const deleteFile = await deleteObject(fileRef);

				return deleteFile;
			});

			await Promise.all(deletePromises);
			const deleteData = await zhisusaEventsShema.findByIdAndDelete({
				_id: req.body.id,
			});
			res.json({
				status: "success",
			});
		} catch (error) {
			console.log(error);
			res.json({
				status: "failed",
			});
		}
	},
};
async function getNextUniqueId() {
	const lastEvent = await zhisusaEventsShema.findOne().sort({ eventId: -1 }).exec();
	if (lastEvent && lastEvent.eventId) {
	  const lastId = parseInt(lastEvent.eventId.replace('EVNTID', ''), 10);
	  return `EVNTID${lastId + 1}`;
	}
	return 'EVNTID1000';
  }
