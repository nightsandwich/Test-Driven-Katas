const {expect} = require('chai');
const wrap = require('./wrap');

describe('wrap', ()=> {
    it('Returns empty string if empty string was provided', () => {
        expect(wrap('',10)).to.equal('');
    });

    it('Returns the line on one line if maxLen is 0', () => {
        expect(wrap('sldkfjlkasjdflkjsdfk',0)).to.equal('');
    });

    it('Returns the line on one line if maxLen is null', () => {
        expect(wrap('sldkfjlkasjdflkjsdfk',null)).to.equal('sldkfjlkasjdflkjsdfk');
    });

    it('Returns the line on one line if maxLen >= length of line', () => {
        expect(wrap('abcd',4)).to.equal('abcd');
    });
    
    it('Returns the line on one line if there are no spaces', () => {
        expect(wrap('abcd',2)).to.equal('abcd');
    });

    it('Returns the line with line breaks inserted after maxLen characters', () => {
        expect(wrap(''))
    })

})