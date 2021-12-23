const timer = (deadline) => {
  console.log(deadline);
  //const one = 'one';

  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');
  let getTime;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    //console.log(`дней ${days}`);
    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = () => {
    getTime = getTimeRemaining();
    //console.log(`это запуск updateClock`);

    if (getTime.timeRemaining > 0) {
      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;
      console.log(`дней ${getTime.days}`);
    } else {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }

    //if (getTime.timeRemaining > 0) {
    //setTimeout(updateClock, 1000);
    //}
  };

  //updateClock();
  //setInterval(updateClock, 1000);
  //setInterval(getTimeRemaining, 1000, '29 december 2021');

  ///очистить интервал по счетчику
  let idInterval = setInterval(() => {
    updateClock();
    if (getTime.timeRemaining < 0) {
      clearInterval(idInterval);
    }
  }, 1000);
};

export default timer;
