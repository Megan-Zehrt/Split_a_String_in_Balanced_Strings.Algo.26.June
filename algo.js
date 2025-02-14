// 1221. Split a String in Balanced Strings



// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.




/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let LeftCounter = 0
    let RightCounter = 0
    let totalBalanced = 0

    for(let i = 0; i < s.length; i++){

        if(s[i] == "L"){
            LeftCounter ++
        }

        if(s[i] == "R"){
            RightCounter ++
        }

        if(LeftCounter == RightCounter){
            totalBalanced ++
        }

    }

    return totalBalanced
};