const {expect} = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', ()=> {
    it('Returns an array with length of two if there is a solution', () => {
        expect(twoSum([1,9],10)).to.be.an('array').that.is.not.empty;
        expect(twoSum([1,9],10)).to.have.lengthOf(2);
    });

    it('Returns an empty array if there is no solution', () => {
        expect(twoSum([1,9],11)).to.be.an('array').that.is.empty;
    });

    it('Returns an empty array if numbers is empty array', () => {
        expect(twoSum([],10)).to.be.an('array').that.is.empty;
    });

    it('Returns an array with two numbers totaling the target', () => {
        expect(twoSum([1,3,5,7],10)).to.be.an('array').that.is.not.empty;
        expect(twoSum([1,3,5,7],10)).to.be.an('array').that.include(3);
        expect(twoSum([1,3,5,7],10)).to.be.an('array').that.include(1);
    });

})