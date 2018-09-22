const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parcelPintarSchema = Schema({
	gyro: {
		threshold: {
			type: Schema.Types.Boolean,
			default: false
		}
	},
	gps: {
		location: {
			long: {
				type: Number,
				required: true,
				default: "0"
			},
			lat: {
				type: Number,
				required: true,
				default: "0"
			}
		}
	}
});

module.exports = mongoose.model("ParcelPintar", parcelPintarSchema);
