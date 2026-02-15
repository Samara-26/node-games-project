// Game 3
const userInputArr = process.argv.slice(2);
if (userInputArr.length !== 2) {
    console.log(`Please enter a phrase in quotes and a shift number.`);
    return;
}
console.log(userInputArr);
const str = userInputArr[0].toLowerCase();
const shift = parseInt(userInputArr[1]);
let result = "";
for(let i=0; i<str.length; i++){
    const currentChar = str[i];
    //Check if the character is a lowercase letter (a–z)
    if(currentChar >= "a" && currentChar <= "z"){
        // a=97
        const position = currentChar.charCodeAt(0) - 97;
        /*
        [a=0, b=1, ..., z=25] 26 letters
        add the shift
        */
        const newPos = ((position + shift) % 26 + 26) % 26;
        // convert back to letter
        const newChar = String.fromCharCode(newPos + 97);
        result += newChar;
    } else {
        result += currentChar;
    }
}
console.log(`result: ${result}`);