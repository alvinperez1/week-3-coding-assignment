//1
ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//1a
ages[ages.length - 1] - ages[0];

//1b
ages.push(101);
ages[ages.length - 1] - ages[0];

//1c
sum = 0;
for (let i = 0; i < ages.length; i++){
    sum = sum + ages[i];
}
console.log(sum / ages.length);

//2
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

//2a
sum = 0;
for (let i = 0; i < names.length; i++){
    sum += names[i].length;
}
console.log(sum / names.length)

//2b
var con = names[0];
for (let i = 1; i < names.length; i++){
    con = con.concat(' ', names[i]);
}
console.log(con);

//3
array[array.length - 1];

//4
array[0];

//5
var nameLengths = [];

for (let i = 0; i < names.length; i++){
    nameLengths[i] = names[i].length;
}
console.log(nameLengths);

//6
sum = 0;
for (let i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i];
}
console.log(sum);

//7
function concat_n_times(word, n){
    var con = word;
    for (let i = 1; i < n; i++){
        con = con.concat(word);
    }
    return con;
}
console.log(concat_n_times("Chicken", 3));

//8 
function fullName(firstName, lastName){
    return firstName + " " + lastName
}
console.log(fullName("John", "Smith"));

//9
function isTotalGreaterThan100(array){
    sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    if (sum > 100){
        return true
    }
    else {
        return false
    }
}

//10
function averageOfArray(array){
    sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length
}

//11
function isAvgArray1GreaterThanAvgArray2(array1, array2){
    if (array1 > array2){
        return true
    }
    else{
        return false
    }
}
console.log(isAvgArray1GreaterThanAvgArray2([11,10,10,10], [10,10,10,10]));

//12
function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside && moneyInPocket > 10.50){
       return true; 
    }
    else{
        return false;
    }
}
var isHotOutside = true;
var moneyInPocket = 30;
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13
// The function below uses two variables, netIncome and netSales, to calculate the profitability of a company
var company;
var netIncome;
var netSales;
ratio = 0;
function profitMarginRatio(company, netIncome, netSales){
    ratio = (netIncome / netSales) * 100; // Formula for calculating Profit Margin Ratio
    ratio = Math.round(ratio); // Rounding to a whole number
    if (ratio >= 20){ //20 is considered high returns by industry standards 
        return 'Profit Margin Percentage:' + ' ' + ratio + '%. ' + 'High Profits, invest in ' + company + '.'
    } 
    else {
        return 'Profit Margin Percentage:' + ' ' + ratio + '%. ' + 'Profits not high enough. Look for another company.'
    }
}
console.log(profitMarginRatio('Nike, Inc', 6046, 21479)); //Numbers are pulled from Nike, Inc. 10-K statement


