'use strict';
// дз 19 п.6

// Запрашиваем день недели вместе с длинным форматом даты
//const date = new Date();
//var date = new Date();
//var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//console.log(date.toLocaleDateString('ru-RU', options));
// → "Donnerstag, 20. Dezember 2012"
//const date = new Date(); // вынес сюда
//const today = new Date();

//const weekDayName = date.toLocaleDateString('ru', { weekday: 'long' });

////console.log(`${today.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' })}`);
//console.log(`${today.toLocaleTimeString('en-US', { hour: 'numeric' })}`);

const timer = () => {
  //const date = new Date();
  //const date = new Date();
  const dateBlock = document.getElementById('date-block');
  //const daysName = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  const addZero = (arg) => {
    if (arg >= 0 && arg < 10) {
      return '0' + arg;
    } else {
      return arg;
    }
  };

  // формат времени и приветствия
  const timeFormat = () => {
    const date = new Date(); // если убрать , не работает
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

  const getTimeRemaining = () => {
    const time = timeFormat();
    const year = time.date.getFullYear() + 1;
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
    //const date = new Date();
    const time = timeFormat();
    const timer = getTimeRemaining();
    const dayWeek = time.date.toLocaleDateString('ru', { weekday: 'long' }); //дни недели в локальном
    dateBlock.innerHTML = `${time.namePartDay} <br>
    Сегодня: ${dayWeek[0].toUpperCase() + dayWeek.substring(1)} <br>
    Текущее время: ${time.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: 'numeric', second: 'numeric' })} <br>
    До нового года осталось ${timer.daysNumber} ${daysTextForm(timer.daysNumber)}`;
  };

  textDate();
  setInterval(textDate, 1000);
};
timer();
