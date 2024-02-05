let input = 5;
let string = "";
for (let i = 1; i <= input; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);
