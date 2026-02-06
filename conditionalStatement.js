// if else
const age = 50;
if (age > 50) {
  console.log("he's buddha");
} else if (age > 25 && age < 35) {
  console.log("he's juvaniya");
} else {
  console.log("he's bachha");
}

// switch case
switch (age) {
  case 30:
    console.log("he's 30");
    break;
  case 50:
    console.log("he's 50");
    break;
  default:
    console.log("he's unknown");
    break;
}

// ternary
const legalAge = age < 20 ? ("chhokro nano chhe") : (age < 40 ? "chhokro moto chhe" : "chhokro nthi")
console.log(legalAge);
