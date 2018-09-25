const Order = require("../models/Order");

class LogMiddleware {
	static injectOrderId(req, res, next) {
		const { parcelId } = req.body;

		Order.findOne({
			parcel: parcelId
		})
			.then(orderFound => {
				if (Object.keys(orderFound).length) {
					req.body.orderId = orderFound._id;
					next();
				} else {
					res.status(404).json({
						error: "Parcel is unavailable"
					});
				}
			})
			.catch(err => {
				res.status(404).json({
					error: err
				});
			});
	}
}

module.exports = LogMiddleware;