function
filterNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}
let numbers =[ -1, 2,-3, 4, -5,6];
let filteredNumbers = filterNegativeNumbers (numbers);

console.log(filteredNumbers);