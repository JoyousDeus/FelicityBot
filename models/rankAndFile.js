const mongoose = require('mongoose');
const User = require('./User');

const rankAndFileSchema = new mongoose.Schema({
	userId: { type: String, required: true, unique: true },
	roleId: { type: String, required: true, unique: true },
	description: { type: String, default: 'No description provided.' },
});

module.exports = mongoose.model('RankAndFile', rankAndFileSchema);
