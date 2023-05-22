let names = ["Clark", "Bruce", "Barry", "Diana", "John"];
// store the first item and second item into a variable separately

// let firstItem = names[0];
// let secondItem = names[1];

// this is called destructing 
// below code will take the first item and second item in names array 
// and assign it to a variable called firstItem, secondItem
let [firstItem, secondItem , x] = names; 
//if you want to get 1st, 3rd, 4th items
//let [a, ,b , c ] = names // a(Clark), b (barry) , c(Diana)

console.log(firstItem);
console.log(secondItem);
console.log(x);

let car = {
    make: "Tesla",
    model: "X",
    year: 2023,
    color: "white" 
}