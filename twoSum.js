const twoSum = (numbers, target) => {
    if (numbers.length === 0) return [];
    
    const returnArr = [];
     
    for (let i = 0; i < numbers.length; i++){
        let num2 = target - numbers[i];
        if (numbers.indexOf(num2) > -1 && numbers.indexOf(num2) !== i){
            returnArr.push(i);
            returnArr.push(numbers.indexOf(num2));
            return returnArr;
        }
    }
    return returnArr;
}

module.exports = twoSum;