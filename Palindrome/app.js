function checkPalindrome(inputString) {
    let strArray = inputString.toLowerCase().split('');
    let newArr = strArray.join('');
    let revArr =  [...newArr].reverse().join('')

    if ( newArr === revArr) {
        return true;
    } else {
        return false;
    }
}

let a = "aabaA"
let b = "a"
let c = "aabaAv"

console.log(checkPalindrome(a))
console.log(checkPalindrome(b))
console.log(checkPalindrome(v))