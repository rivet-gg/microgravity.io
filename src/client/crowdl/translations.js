const translationsRaw = require('./translationsRaw');

// Map the languages to the dictionary
const languages = {};
for (let lang of translationsRaw) {
	// Convert all Crowdl-style interpolations to i18n-style interpolations
	for (let key in lang.data) {
		let str = lang.data[key];

		// Replace the values
		for (let i = 1; i <= 20; i++) {
			str = str.replace(`$${i}`, `{${i - 1}}`);
		}

		// Save the new value
		lang.data[key] = str;
	}

	// Save the language
	languages[lang.language_id] = lang.data;
}

module.exports = languages;
