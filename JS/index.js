//5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// let userNum = prompt("Введите пятизначное число: ");

// if (!isNaN(userNum) && userNum.length === 5) {
//     if(userNum === userNum.split('').reverse().join('')){
//         console.log('Введенное число является палиндромом.')
//     }else {
//         console.log('Введенное число не является палиндромом.')
//     }
// }else {
//     console.log('Пожалуйста, введите корректное число.')
// }

//6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,
//UAN или AZN, и получает в ответ соответствующую сумму.

// let usdAmount = parseFloat(prompt("Введите количество USD:"));

// if (!isNaN(usdAmount)) {
//   let currencyChoice = prompt(
//     "Выберите валюту для конвертации (EUR, UAN или AZN):"
//   ).toUpperCase();
//   let exchange;
//   switch (currencyChoice) {
//     case "EUR":
//       exchange = 0.85;
//       break;
//     case "UAN":
//       exchange = 28.2;
//       break;
//     case "AZN":
//       exchange = 1.7;
//       break;
//     default:
//       console.log(
//         "Выбрана некорректная валюта. Пожалуйста, выберите EUR, UAN или AZN."
//       );
//       break;
//   }
//   let converted = usdAmount * exchange;
//   console.log("Сумма в " + currencyChoice + " : " + converted.toFixed(2));
// } else {
//   console.log("Пожалуйста, введите корректное количество USD.");
// }

//7. Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%.

// let purchaseAmount = parseFloat(prompt("Введите сумму покупки: "));

// if (!isNaN(purchaseAmount)) {
//   let discountRate = 0;

//   if (purchaseAmount >= 200 && purchaseAmount < 300) {
//     discountRate = 0.03;
//   } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
//     discountRate = 0.05;
//   } else if (purchaseAmount >= 500) {
//     discountRate = 0.07;
//   }

//   let discountedAmount = purchaseAmount - purchaseAmount * discountRate;
//   console.log("Сумма к оплате со скидкой: " + discountedAmount.toFixed(2));
// } else {
//   console.log("Пожалуйста, введите корректную сумму покупки.");
// }

//8. Запросить у пользователя длину окружности и периметр
// квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

// let circle = parseFloat(prompt("Введите длину окружности:"));
// let square = parseFloat(prompt("Введите периметр квадрата:"));

// if (!isNaN(circle) && !isNaN(square) && circle > 0 && square > 0) {
//   let circleDiameter = circle / Math.PI;

//   let squareSide = square / 4;

//   if (circleDiameter <= squareSide) {
//     console.log("Окружность может поместиться в квадрат.");
//   } else {
//     console.log("Окружность не может поместиться в квадрат.");
//   }
// } else {
//   console.log("Введите конкретные значения.");
// }

//9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2
// балла. После вопросов выведите пользователю количество
// набранных баллов

let score = 0;

let question1 = prompt(
  "1. Кто проживает на дне океана?\n a) Двейн Скала Джонсон b) Спандж Боб c) Киллиан Мбаппе"
);

if (question1.toLowerCase() === "b") {
  score += 2;
}

let question2 = prompt(
  '2. Как звали толстого бурундука из фильма "Элвин и Бурундуки\n a) Сабзиро b) Иннокентий  c) Теодор '
);
if (question2.toLowerCase() === "c") {
  score += 2;
}

let question3 = prompt(
  "3. Кто такой Марс в древнем Риме?\n a) Батончик b) Бог плодородия c) Бог верстки на HTML/CSS"
);

if (question3.toLowerCase() === "b") {
  score += 2;
}

alert("Вы набрали " + score + " баллов.");

if (score === 0) {
  alert("Не повезло не фортануло. Ты набрал " + score);
}

//10. Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год.

// let day = parseInt(prompt("Введите день: "));
// let month = parseInt(prompt("Введите месяц: "));
// let year = parseInt(prompt("Введите год: "));

// if (
//   !isNaN(day) &&
//   !isNaN(month) &&
//   !isNaN(year) &&
//   day > 0 &&
//   day <= 31 &&
//   month > 0 &&
//   month <= 12 &&
//   year > 0
// ) {
//   let daysInMonth = new Date(year, month, 0).getDate();

//   if (day <= daysInMonth) {
//     let nextDate = new Date(year, month - 1, day + 1);

//     let nextDay = nextDate.getDate();
//     let nextMonth = nextDate.getMonth() + 1;
//     let nextYear = nextDate.getFullYear();
//     console.log(
//       "Следующая дата: " + nextDay + " " + nextMonth + " " + " " + nextYear
//     );
//   } else {
//     console.log("Некорректный день");
//   }
// } else {
//   console.log("Пожалуйста введите корректные данные.");
// }
