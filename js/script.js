// Recursion in Javascript

// Q: Reverse a string

function reverseString(str) {
    if(str === "") {
        return ""
    } else {
        return reverseString(str.substr(1)) + str.charAt(0)
    }
}

console.log(reverseString("hello"))


function reverseStr (str){
    if (str.length <= 0){
        return "";
    }
    else return str.slice(str.length - 1) + reverseStr(str.slice(0, str.length - 1));
}

console.log(reverseStr("hello"))