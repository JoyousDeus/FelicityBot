const User = require('../models/User');
const { roles } = require('../config/rolesToIDs');

module.exports = {
	name: 'guildMemberRankUpdate',
	async execute(oldMember, newMember) {
		// Find the role that was just added
		const addedRole = newMember.roles.cache.find(
			(role) => !oldMember.roles.cache.has(role.id),
		);
		// If none return.
		if (!addedRole) return;

		// Map role IDs to user history fields
		const promotionMap = {
			[roles.NEOPHYTE]: 'becameNeophyteAt',
			[roles.BROTHER]: 'becameBrotherAt',
			[roles.VETERAN]: 'becameVeteranAt',
			// [roles.COMPANYANCIENT]:'promotedToCompanyAncientAt',
			[roles.FIRETEAMLEADER]: 'promotedToFireteamLeaderAt',
			[roles.SARGEANT]: 'promotedToSargeantAt',
			// [roles.VETERANSARGEANT]: 'promotedToVeteranSargeantAt',
			// [roles.SECONDLIEUTENANT]: 'promotedToSecondLieutenantAt',
			// [roles.FIRSTLIEUTENANT]: 'promotedToFirstLieutenantAt',
			// [roles.LEXICANIUM]: 'promotedToLexicaniumAt',
			// [roles.LIBRARIAN]: 'promotedToLibrarianAt',
			// [roles.CHIEFLIBRARIAN]: 'promotedToChiefLibrarianAt',
			// [roles.TECHADEPT]: 'promotedToTechAdeptAt',
			// [roles.TECHMARINE]: 'promotedToTechMarineAt',
			// [roles.FORGEMASTER]: 'promotedToForgemasterAt',
			// [roles.LOGISTICAR]: 'promotedToLogisticarAt',
			// [roles.CHIEFVICTUALIAR]: 'promotedToChiefVictualiarAt',
			// [roles.MASTEROFMARCHES]: 'promotedToMasterOfMarchesAt',
			// [roles.NOVITIATE]: 'promotedToNovitiateAt',
			// [roles.APOTHECARY]: 'promotedToApothecaryAt',
			// [roles.CHIEFAPOTHECARY]: 'promotedToChiefApothecaryAt',
			// [roles.JUDICIAR]: 'promotedToJudiciarAt',
			// [roles.CHAPLAIN]: 'promotedToChaplainAt',
			// [roles.MASTEROFSANCTITY]: 'promotedToMasterOfSanctityAt',
			// [roles.SHADOWCAPTAIN]: 'promotedToShadowCaptainAt',
			// [roles.CHAPTERMASTER]: 'promotedToChapterMasterAt',
			// [roles.SHADOWWARDEN]: 'promotedToShadowWardenAt',
			// [roles.CAPTAINOFTHESHADOWWARDENS]:
			// 	'promotedToCaptainOfTheShadowwardensAt',
			[roles.MASTEROFHSADOWS]: 'promotedToMasterOfShadowsAt',
			[roles.OATH]: 'promotedToOathAt',
			[roles.CHAPTERCOMMAND]: 'promotedToChapterCommandAt',
			[roles.RAVENSNEST]: 'promotedToRavensNestAt',
		};
	},
};
