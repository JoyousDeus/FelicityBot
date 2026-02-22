const availableQOSchema = new mongoose.Schema({
	qos: [
		{
			name: { type: String, required: true },
			description: { type: String, required: true },
			requirements: { type: [String], default: [], required: true },
			iconUrl: { type: String, default: null },
		},
	],
});

module.exports = mongoose.model('AvailableQO', availableQOSchema);
