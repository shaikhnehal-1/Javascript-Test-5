//Q1 : 
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));


//Q2 :
function ValidBrackets(s) {
    var paranthesesCount = 0;
    var squareCount = 0;
    var curlyCount = 0;

    for (var i = 0; i < s.length; i++) {
        var char = s[i];

        if (char === '(') {
            paranthesesCount++;
        } else if (char === '[') {
            squareCount++;
        } else if (char === '{') {
            curlyCount++;
        }

        //For checking Closing parantheses
        else if (char === ')') {
            paranthesesCount--;
            if (paranthesesCount < 0) return false;
        } else if (char === ']') {
            squareCount--;
            if (squareCount < 0) return false;
        } else if (char === '}') {
            curlyCount--;
            if (curlyCount < 0) return false;
        }
    }

    return paranthesesCount === 0 && squareCount === 0 && curlyCount === 0;
}

console.log(ValidBrackets("()[]{}"));
console.log(ValidBrackets("(]"));

//Q3 :

function mergeArrays(arr1, arr2) {
    var finalArray = arr1.concat(arr2);
    finalArray.sort(function(a, b) {
        return a - b;
    });

    return finalArray;
}
console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeArrays([1, 2, 3], [2, 5, 6]));