const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	userId: { type: String, required: true, unique: true },
	username: { type: String, required: true },
	currentRank: { type: String, default: 'Guest', required: true },
	dateJoined: { type: Date, default: Date.now },
	// Rank history fields
	history: {
		becameNeophyteAt: Date,
		becameBrotherAt: Date,
		becameVeteranAt: Date,
		promotedToCompanyAncientAt: Date,
		promotedToFireteamLeaderAt: Date,
		promotedToSargeantAt: Date,
		promotedToVeteranSargeantAt: Date,
		promotedToLexicaniumAt: Date,
		promotedToLibrarianAt: Date,
		promotedToChiefLibrarianAt: Date,
		promotedToTechAdeptAt: Date,
		promotedToTechMarineAt: Date,
		promotedToForgemasterAt: Date,
		promotedToLogisticarAt: Date,
		promotedToChiefVictualiarAt: Date,
		promotedToMasterOfMarchesAt: Date,
		promotedToNovitiateAt: Date,
		promotedToApothecaryAt: Date,
		promotedToChiefApothecaryAt: Date,
		promotedToJudiciarAt: Date,
		promotedToChaplainAt: Date,
		promotedToMasterOfSanctityAt: Date,
		promotedToSecondLieutenantAt: Date,
		promotedToFirstLieutenantAt: Date,
		promotedToShadowCaptainAt: Date,
		promotedToChapterMasterAt: Date,
		promotedToShadowWardenAt: Date,
		promotedToCaptainOfTheShadowwardensAt: Date,
		promotedToMasterOfShadowsAt: Date,
		promotedToOathAt: Date,
		promotedToChapterCommandAt: Date,
		promotedToRavensNestAt: Date,
	},
	// Game stats
	aarPoints: { type: Number, default: 0, required: true },
	honorsObtained: { type: [String], default: [], required: true },
	mostPlayedWith: { type: [String], default: [], required: true },
});

module.exports = mongoose.model('User', userSchema);
