let lang = "en";
const WeekDayRu = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const WeekDayEn = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

if (lang === "en") {
  console.log(WeekDayEn);
} else if (lang === "ru")  {
  console.log(WeekDayRu);
}

switch (lang) {
  case "ru":
    console.log(WeekDayRu);
    break;
  case "en":
    console.log(WeekDayRu);
    break;

  default:
    console.log("ошибка");
    
}

// сложная задача решение нашел но не моё, формулировка задачи очень сложная для понимания. Не поймешь где искать ответ

let daysOfWeek = [
  ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
];

let lang2 = 'en'; // или 'en'
let langIndex = lang2 === 'ru' ? 0 : 1;

console.log(daysOfWeek[langIndex]);


const namePerson = 'АртемАлександр';

const namePersonType = 
(namePerson === "Артем") ? "директор" : (namePerson === "Александр") ? "преподаватель" : "студент";
console.log(namePersonType)