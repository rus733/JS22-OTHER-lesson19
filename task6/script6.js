'use strict';

const dateBlock = document.getElementById('date-block');
const daysName = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const timeFormat = () => {
  const date = new Date();
  const dayWeek = daysName[new Date().getDay() - 1];
  const hour = date.getHours();
  const addZero = (arg) => {
    if (arg > 0 && arg < 10) {
      return '0' + arg;
    } else {
      return arg;
    }
  };

  const amPM = hour >= 12 ? 'PM' : 'AM';
  const hours = hour > 12 ? hour - 12 : hour;
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());
  let namePartDay = ''; //Приветствие
  if (hour >= 5 && hour < 10) {
    namePartDay = 'Доброе утро';
  } else if (hour >= 10 && hour < 16) {
    namePartDay = 'Добрый день';
  } else if (hour >= 16 && hour < 23) {
    namePartDay = 'Добрый вечер';
  } else if (hour >= 23 && hour < 5) {
    namePartDay = 'Доброй ночи';
  }

  return {
    namePartDay,
    amPM,
    dayWeek,
    hours,
    minutes,
    seconds,
  };
};
