let lang = "ru";
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
} else  {
  console.log(WeekDayRu);
}

switch (lang) {
  case "en":
    console.log(WeekDayRu);
    break;
  case "ru":
    console.log(WeekDayRu);
    break;

  default:
    console.log("ошибка");
    
}

// Не понимаю я решение этой задачи

let daysOfWeek = [
  [ 'ru','понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  ['en', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
];


let langIndex = lang === 'ru' ? 0 : 1;

console.log(daysOfWeek[langIndex]);


const namePerson = 'Артем';

const namePersonType = 
(namePerson === "Артем") ? "директор" : (namePerson === "Александр") ? "преподаватель" : "студент";
console.log(namePersonType)