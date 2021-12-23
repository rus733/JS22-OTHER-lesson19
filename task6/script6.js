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

const getTimeRemaining = () => {
  const dateStop = new Date('1 January 2022').getTime();
  const dateNow = new Date().getTime();
  const newYear = dateNow > dateStop ? true : false;
  const timeRemaining = (dateStop - dateNow) / 1000;
  const day = Math.floor(timeRemaining / 60 / 60 / 24);
  return {
    timeRemaining,
    day,
    newYear,
  };
};

const daysTextForm = (n) => {
  const textForms = [' день ', ' дня ', ' дней '];
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForms[1];
  }
  if (n1 == 1) {
    return textForms[0];
  }
  return textForms[2];
};
