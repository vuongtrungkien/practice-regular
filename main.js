 let regexp = /^[A-Z]/;

let str = prompt("Enter the string");

function checkStr(str) {
    if (regexp.test(str)) {
        alert("String's first character is uppercase");
    } else {
        alert("String's first character is not uppercase");
    }

};

checkStr(str);