const mongoose = require('mongoose');

const rankAndFileSchema = new mongoose.Schema({
	// Company array
	companies: [
		{
			companyId: { type: String, required: true, unique: true },
			companyName: { type: String, required: true, unique: true },
			// Squads within the company
			squads: [
				{
					squadId: { type: String, required: true, unique: true },
					squadName: { type: String, required: true, unique: true },
					squadMemberCount: {
						type: Number,
						required: true,
						default: 0,
						min: 0,
						max: 10,
					},
					squadMembers: [
						{
							userId: { type: String, required: true },
							username: { type: String, required: true },
							rank: { type: String, required: true },
							dateJoinedSquad: { type: Date, default: Date.now },
						},
					],
				},
			],
		},
	],
});

module.exports = mongoose.model('RankAndFile', rankAndFileSchema);
