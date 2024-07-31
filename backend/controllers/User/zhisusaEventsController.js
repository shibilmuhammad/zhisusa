const zhisusaEventsBookingSchema = require("../../models/ZhisusaEventBookingsModel");
const transactionsSchema = require("../../models/transactionsModel");
const zhisusaEventsShema = require("../../models/zhisusaEventsModel");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const crypto = require("crypto");
const QRCode = require("qrcode");
const generateUniqueId = require("../../utils/generateUniqueId");
const instance = new Razorpay({
	key_id: process.env.API_KEY,
	key_secret: process.env.API_SECRET,
});

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
	getZhisusaEventDetails: async (req, res) => {
		try {
			const data = await zhisusaEventsShema.findOne({ eventId: req.query.id });

			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({
				message: "Internal Server Error",
			});
		}
	},
	createOrder: async (req, res) => {
		const {count} = req.body
		const payment_capture = 1;
		const currency = "INR";
		try {
			const data = await zhisusaEventsShema.findOne({
				eventId: req.body.eventId,
			});
			const finalPrice = (data?.details?.price * count) + 30 + ((data?.details?.price * count) * 0.18)
			const options = {
				amount: finalPrice * 100, // Amount in paise
				currency,
				receipt: shortid.generate(),
				payment_capture,
			};
			const response = await instance.orders.create(options);
			res.json({
				id: response.id,
				currency: response.currency,
				amount: response.amount,
			});
		} catch (error) {
			console.error(error);
			res.status(500).send("Something went wrong");
		}
	},
	bookEvent: async (req, res) => {
		const {
			paymentId,
			orderId,
			signature,
			name,
			email,
			phone,
			count,
			eventId,
		} = req.body;
		const hmac = crypto.createHmac("sha256", process.env.API_SECRET);
		hmac.update(`${orderId}|${paymentId}`);
		const generatedSignature = hmac.digest("hex");

		if (generatedSignature !== signature) {
			return res.status(400).send("Invalid signature");
		}

		// payment is successfull
		try {
			const paymentDetails = await instance.payments.fetch(paymentId);
			const event = await zhisusaEventsShema.findOne({ eventId: eventId });
			const finalPrice = (event?.details?.price * count) + 30 + ((event?.details?.price * count) * 0.18)
			const validAmount = finalPrice === (paymentDetails.amount / 100) ? true : false
			if (! validAmount) return res.status(400).send("Something Went Wrong");
			const newTransaction = new transactionsSchema({
				userName: name,
				phone: phone,
				email: email,
				orderId: orderId,
				details: {
					date: new Date(paymentDetails.created_at * 1000)
						.toISOString()
						.slice(0, 19)
						.replace("T", " "),
					paymentId: paymentId,
					method: paymentDetails.method,
					amount: paymentDetails.amount / 100,
					status: paymentDetails.status,
				},
			});
			await newTransaction.save();
			// Generate a unique ticket ID
			const tickets = [];

			for (let i = 0; i < count; i++) {
				const ticketId = generateUniqueId();
				const qrCode = await QRCode.toDataURL(ticketId);
				tickets.push({
					ticketId: ticketId,
					qrCode: qrCode,
					created_at: Date.now(),
					// other ticket details if necessary
				});
			}

			const newBooking = new zhisusaEventsBookingSchema({
				orderId: orderId,
				eventId: eventId,
				contactDetails: {
					name: name,
					phone: phone,
					email: email,
				},
				costDetails: {
					ticketsCount: count,
					ticketsCost: event?.details?.price * count,
					gst: event?.details?.price * count * 0.18,
					fee: 30,
					totalCost:
						event?.details?.price * count +
						30 +
						event?.details?.price * count * 0.18,
				},
				tickets: tickets,
			});
			await newBooking.save();

			res.status(200).send("Success");
		} catch (err) {
			console.log(err);
			res.status(400).send(err);
		}
	},
};
