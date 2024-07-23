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
			const {
				title,
				status,
				main,
				availability,
				startTime,
				endTime,
				description,
				proximity,
				priceHour,
				priceDay,
				capacity,
				location,
				packages,
			} = req.body;
			if (
				![
					title,
					status,
					main,
					availability,
					startTime,
					endTime,
					description,
					proximity,
					priceHour,
					priceDay,
					capacity,
					location,
				].every(Boolean) ||
				packages.length < 1 ||
				req.files.length < 1
			) {
				return res
					.status(400)
					.json({
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

			const newData = new activitySchema({
				title: title,
				mainCategory: main || "Activities",
				status: status || "Available",
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
		try {
			const {
				title,
				status,
				main,
				availability,
				startTime,
				endTime,
				description,
				proximity,
				priceHour,
				priceDay,
				capacity,
				location,
				packages,
				id,
				image_links
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


			const updateData = await activitySchema.findOne({_id:id});
			if (updateData) {
				updateData.title = title || updateData.title;
				updateData.status = status || updateData.status;
				updateData.mainCategory = main || updateData.mainCategory;
				updateData.details.schedule.time =
					`${startTime} to ${endTime}` || updateData.details.schedule.time;
				updateData.description = description || updateData.details.description;
				updateData.details.capacity = capacity || updateData.details.capacity;
				updateData.details.price.perDay =
					priceDay || updateData.details.price.perDay;
				updateData.details.price.perSession =
					priceHour || updateData.details.price.perSession;
				updateData.details.packageIncludes =
					packages || updateData.details.packageIncludes;
				updateData.details.schedule.availability =
					availability || updateData.details.schedule.availability;
				updateData.details.location.place =
					location || updateData.details.location.place;
				updateData.details.location.proximityToAmenities =
					proximity || updateData.details.location.proximityToAmenities;
				if(image_links){
					uploadedFiles ? updateData.details.images = [...image_links.split(',') ,...uploadedFiles] : updateData.details.images = image_links.split(',')
				}else{
					uploadedFiles ? updateData.details.images = uploadedFiles : updateData.details.images = []
				}
				
					
			}
			await updateData.save()

			res.json({
				status: "success",
			});
		} catch (error) {
			console.error("Error uploading files:", error);
			res.status(500).json({ error: "Failed to upload files" });
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
