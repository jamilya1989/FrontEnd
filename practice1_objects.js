let num = 100; 
// Arithmetic Operators  + - * / %    
  // ++ --
console.log(num + 5 );
console.log(num - 5 );
console.log(num * 5 );
console.log(num / 5 );
console.log(num % 5 );

console.log("-----------");
// Assignments Operators 
// =   +=  -=  *= /=  %=
console.log(num += 100);
console.log(num -= 50);
console.log(num *= 2);
console.log(num /= 2);

console.log("-----------");

// Relational|Comparison Operators 
    // == ===  !=  !==  > >= < <=
let price = 99; 
let strPrice = "99";

console.log(price == strPrice); // true: just check for content equality
console.log(price === strPrice); //false : check for content and type equality

console.log(price!=99);  //false

// Logical Operators  && ||   &  |
// check is the price value between 50 - 100 
console.log(price < 100 && price > 50); // true
// check the price is less than 10 or greater than 100
console.log(price < 10 || price > 100);

// Conditional Statement 

// Arrays :

let scores = [99, 67, 59, 77, 100];
console.log(scores);
// get the first item in array
console.log(scores[0]); //99

// count how many elements in array
console.log("Item count: " + scores.length);

// Javascript object
let person1 = {
                firstName: "Elnara",
                lastName: "H",
                age: 18,
                company: {
                  companyName: "Apple",
                  location: "California",
                }
              };

console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.company.companyName);