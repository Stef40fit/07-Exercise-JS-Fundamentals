function extractOddOccurrences(sentence) {
    const words = sentence.toLowerCase().split(' ');

    // Създаване на Map за съхранение на броя срещания на всяка дума
    const occurrences = new Map();

    // Преброяване на срещанията на всяка дума
    words.forEach(word => {
        occurrences.set(word, (occurrences.get(word) || 0) + 1);
    });

    // Извличане на думи с нечетен брой срещания
    const oddOccurrences = Array.from(occurrences.entries())
        .filter(([word, count]) => count % 2 !== 0)
        .map(([word]) => word).join(' ');

    return oddOccurrences;
}

// Използване на функцията с желаните променливи
const inputSentence = 'Java C# Php PHP Java PhP 3 C# 3 1 5 C#';
const result = extractOddOccurrences(inputSentence);

// Извеждане на резултата в конзолата
console.log(result);
