function countVowels(str) {
    let vowels = str.match(/[aeiou]/gi);
    return vowels ?
    vowels.length : 0;
}
console.log(countVowels('Hello World'));