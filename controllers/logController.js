const Log = require("../models/Log");

class LogController {
	constructor() {}
	static create(req, res) {
		let { long, lat, threshold } = req.body;
		Log.create({
			lat,
			long,
			threshold
		})
			.then(logCreated => {
				res.status(200).json({
					message: "log found",
					data: logCreated
				});
			})
			.catch(err => {
				res.status(400).json(err);
			});
	}

	static getAll(req, res) {
		Log.find({})
			.then(logFound => {
				res.status(200).json({
					message: "log found",
					data: logFound
				});
			})
			.catch(err => {
				res.status(400).json({ error: err.message });
			});
	}

	static getById(req, res) {
		Log.findById(req.params.id)
			.then(logFound => {
				res.status(200).json({
					message: "log found",
					data: logFound
				});
			})
			.catch(err => {
				res.status(400).json({ err: err.message });
			});
	}

	static delete(req, res) {
		Log.findByIdAndRemove(req.params.id)
			.then(response => {
				res.status(200).json({ message: "", data: response });
			})
			.catch(err => {
				res.status(400).json({ err: err.message });
			});
	}
}

module.exports = LogController;
