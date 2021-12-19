const string = 'Привет! Как дела?';

const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];

const getVowels = stringParameter => {
	let extractedVowels = "";
  
	for (let i = 0; i < stringParameter.length; i++) {
  	const currentLetter = stringParameter[i].toLowerCase();
    
    if (vowels.includes(currentLetter)) {
    	extractedVowels += currentLetter;
    }
  }

	return extractedVowels;
};

console.log(getVowels(string));