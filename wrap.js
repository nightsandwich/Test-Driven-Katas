const wrap = (line, maxLen) => {
    if (line === '' || line.length <= maxLen || !line.includes(' ') || maxLen === null) return line;
    if (maxLen === 0 || line === null) return '';
    
    const words = line.split(' ');
    let returnLine = words[0];

    for (let i = 1; i < words.length; i++){
        let word = words[i];
        if (returnLine.length <= maxLen){
            returnLine += ' ' + word;
        } else {
            returnLine += '\n' + word;
        }


    }
};

module.exports = wrap;