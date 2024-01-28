function solve(words, template) {
    const separatedWords = words.split(', ');
    for (const Word of separatedWords) {
template=template.replace('*'.repeat(Word.length), Word)
    }
console.log(template)

}

solve('great', 'softuni is ***** place for learning new programming languages');
