// //first programm
let usersNumber = prompt("Введите число для первой программы");

if (usersNumber !== " " && usersNumber !== "") {

  if (usersNumber % 3 == 0 && usersNumber % 5 == 0) {
    console.log("FizzBuzz");
  } else if (usersNumber % 3 == 0) {
    console.log("Fizz");
  } else if (usersNumber % 5 == 0) {
    console.log("Buzz");
  }

} else {
  console.log("для первой программы число не было введено")
}

// //second programm
let usersYear = prompt("введите год")

if (usersYear > 0) {
  if (usersYear % 4 == 0 && (usersYear % 100 !== 0 || usersYear % 400 === 0)) {
    console.log(usersYear + " " + "является высокосным");
  } else {
    console.log(usersYear + " " + "не является высокосным");
  }
} else {
  console.log("неверно указан год")
}

//third programm
let usersAge = prompt("введите ваш возраст")

if (usersAge < 100) {

  if (usersAge.length == 2) {

    if (usersAge[1] == 1 && usersAge > 20) {
      console.log(`Вам ${usersAge} рік`)
    } else if (usersAge[1] <= 4 && usersAge[1] != 0 && usersAge > 20) {
      console.log(`Вам ${usersAge} роки`)
    } else if (usersAge[1] <= 9) {
      console.log(`Вам ${usersAge} років`)
    }
  } else {
    if (usersAge[0] == 1) {
      console.log(`Вам ${usersAge} рік`)
    } else if (usersAge[0] <= 4 && usersAge[0] != 0) {
      console.log(`Вам ${usersAge} роки`)
    } else if (usersAge[0] <= 9) {
      console.log(`Вам ${usersAge} років`)
    }
  }

}