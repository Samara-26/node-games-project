// Game 2
const processArr = process.argv;
// console.log(processArr);

const userInput = processArr.slice(2);
// console.log(userInput);
if (userInput.length !== 1) {
    console.log("Please give a one sentense within \"\" ");
    return;
}

const joinedStr = userInput.join();
// console.log(joinedStr);
let pigLatin = "";
const vowels = "aeiou";

const splitedArr = joinedStr.split(" ");
// console.log(splitedArr);
const pigLatinTranslator = splitedArr.forEach((element) => {
    const current = element.trim().toLowerCase();
    if (vowels.includes(current[0])) {
        pigLatin += ` ${current}way`;
        return;
    } else if (!vowels.includes(current[0]) && !vowels.includes(current[1])) {
        pigLatin += ` ${current.slice(2)}${current.slice(0,2)}ay`;
        return;
    } else if(!vowels.includes(current[0]) && vowels.includes(current[1])){
        pigLatin += ` ${current.slice(1)}${current[0]}ay`;
        return;
    }
});
pigLatin = pigLatin.trim();
console.log(pigLatin);
