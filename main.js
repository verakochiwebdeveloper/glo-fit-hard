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

if (lang === "ru") {
  console.log(WeekDayEn);
} else {
  console.log(WeekDayRu);
}

switch ("ru") {
  case "ru":
    console.log(WeekDayRu);
    break;
  case "en":
    console.log(WeekDayRu);
    break;

  default:
    console.log("ошибка");
    
}

// не понял я вариант це ни формулировку не суть решения готовым ответом пользоваться не хочу https://qna.habr.com/q/661729

const namePerson = 'АртемАлександр';

const namePersonType = 
namePerson === 'Артем' ? console.log('директор')
:namePerson === 'Александр' ? console.log('преподаватель')
:console.log('студент');