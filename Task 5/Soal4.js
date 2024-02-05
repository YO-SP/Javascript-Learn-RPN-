function xo(str){
let hasilX = 0; 
let hasilO = 0; 

for(let i = 0; i <= str.length - 1; i++){
 if (str[i] === "x"){
    hasilX += 1; 
 } else if (str[i] === "o"){
    hasilO += 1; 
 } else {
    return (`Inputan tidak diketahui`); 
 }
}

if (hasilX === hasilO){
    return true; 
} else {
    return false;
}

}

//TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
