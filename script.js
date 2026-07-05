let stringValue = "Hello";
let numberValue = 25;
let booleanValue = true;
let nullValue = null;
let undefinedValue;

console.log(stringValue);
console.log(numberValue);
console.log(booleanValue);
console.log(nullValue);
console.log(undefinedValue);

let firstName = prompt("შეიყვანე შენი სახელი");
let lastName = prompt("შეიყვანე შენი გვარი");
let age = Number(prompt("შეიყვანე შენი ასაკი"));

let ageIn2030 = age + 4;
console.log(
  `მე ვარ ${firstName} ${lastName} და 2030ში ვიქნები ${ageIn2030} წლის`,
);
