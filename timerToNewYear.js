'use strict';
// дз 19 п.6

const timerToNewYear = () => {
  const dateBlock = document.getElementById('date-block');

  // формат времени и приветствия
  const timeFormat = () => {
    const date = new Date();
    const hour = date.getHours();
    let namePartDay = '';
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
      date,
    };
  };

  // остаток времени

  const getTimeRemaining = (date) => {
    const year = date.getFullYear() + 1;
    const dateStop = new Date(year, 0, 1).getTime();
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const daysNumber = Math.floor(timeRemaining / 60 / 60 / 24);
    return {
      timeRemaining,
      daysNumber,
    };
  };

  //форма окончания слова день

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
    if (n1 === 1) {
      return textForms[0];
    }
    return textForms[2];
  };

  // вывод данных
  const textDate = () => {
    const { date, namePartDay } = timeFormat();
    const timer = getTimeRemaining(date);
    const dayWeek = date.toLocaleDateString('ru', { weekday: 'long' }); //дни недели в локальном
    dateBlock.innerHTML = `${namePartDay} <br>
    Сегодня: ${dayWeek[0].toUpperCase() + dayWeek.substring(1)} <br>
    Текущее время: ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: 'numeric', second: 'numeric' })} <br>
    До нового года осталось ${timer.daysNumber} ${daysTextForm(timer.daysNumber)}`;
  };

  textDate();
  setInterval(textDate, 1000);
};
timerToNewYear();
