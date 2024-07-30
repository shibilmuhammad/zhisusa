const categorySchema = require("../../models/categoryModel");
const mainSchema = require("../../models/mainModel");
const zhisusaEventsShema = require("../../models/zhisusaEventsModel");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const crypto = require("crypto");
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
	bookEvent: async (req, res) => {
		try {
			res.json(req.body);
		} catch (error) {
			console.log(error);
		}
	},
	createOrder: async (req, res) => {
		const payment_capture = 1;
		const amount = 100; // Amount in smallest currency unit, e.g., paise
		const currency = "INR";

		const options = {
			amount: amount * 100, // Amount in paise
			currency,
			receipt: shortid.generate(),
			payment_capture,
		};

		try {
			const response = await instance.orders.create(options);
			console.log(response);
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
	verifyPayment: async (req, res) => {
		const { paymentId, orderId, signature } = req.body;

		const hmac = crypto.createHmac("sha256", process.env.API_SECRET);
		hmac.update(`${orderId}|${paymentId}`);
		const generatedSignature = hmac.digest("hex");

		if (generatedSignature === signature) {
			res.send("Payment verified successfully");
			console.log(req.body);
		} else {
			res.status(400).send("Invalid signature");
		}
	},
};
