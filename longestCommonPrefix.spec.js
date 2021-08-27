const {expect} = require('chai');
const longestCommonPrefix = require('./longestCommonPrefix');

describe('longestCommonPrefix', ()=> {
    it('Returns an empty array if wordsArr is empty array', () => {
        expect(longestCommonPrefix([])).to.be.an('array').that.is.empty;
    });
    it('Returns an empty array if wordsArr contains an empty string', () => {
        expect(longestCommonPrefix(['boat', ''])).to.be.an('array');
        expect(longestCommonPrefix(['boat', ''])).to.be.empty;
    });
    it('Input is an array', ()=> {
        expect([]).to.be.an('array');
    })
})