const mongoose = require('mongoose');

const aarSchema = new mongoose.Schema({
	pveGames: { type: Number, required: true, default: 0 },
	absoluteGames: { type: Number, required: true, default: 0 },
	lethalGames: { type: Number, required: true, default: 0 },
	hardGames: { type: Number, required: true, default: 0 },
	normalGames: { type: Number, required: true, default: 0 },
	customGames: { type: Number, required: true, default: 0 },
	pvpGames: { type: Number, required: true, default: 0 },
	geneSeeds: { type: Number, required: true, default: 0 },
	armoryData: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model('AAR', aarSchema);
