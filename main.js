function countWords(sentence)
{
    let trimsentence = sentence.trim();
    let splitsentence = trimsentence.split(/\s+/);
    let wordsentence = splitsentence.length;
    
    return wordsentence;
}

module.exports = {
    countWords: countWords
};