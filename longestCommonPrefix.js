const longestCommonPrefix = (wordsArr) => {
    if (wordsArr.length === 0 || wordsArr.includes('')) return [];

    const shortestWord = wordsArr.reduce((accum,word) => {
        if (word.length > accum.length) accum = word;
        return accum;
    })
    for (let i = 0; i < wordsArr[0].length; i++){
        for(let j = 0; j <)
    }
}
module.exports = longestCommonPrefix;