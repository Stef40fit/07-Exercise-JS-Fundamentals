function checkForWord(word, text) {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseText = text.toLowerCase().split(' ');

    if (lowerCaseText.includes(lowerCaseWord)) {
       console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

// Example usage
checkForWord('python',
    'JavaScript is the best programming language'
);
