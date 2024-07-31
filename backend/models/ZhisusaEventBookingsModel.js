const mongoose = require("mongoose");

const zhisusaEventsBookingSchema = new mongoose.Schema({
	orderId: String,
	eventId : String,
	contactDetails: {
		name: String,
		phone: String,
		email: String,
	},
	costDetails: {
		ticketsCount: Number,
		ticketsCost: Number,
		gst: Number,
		fee: Number,
		totalCost: Number,
	},
    tickets : []
});

const zhisusaEventsBooking = mongoose.model(
	"zhisusa events bookings",
	zhisusaEventsBookingSchema
);

module.exports = zhisusaEventsBooking;
