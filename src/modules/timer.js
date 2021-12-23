const timer = (deadline) => {
  console.log(deadline);
  //const one = 'one';

  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

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
      //hours: hours,
      //minutes: minutes,
      //seconds: seconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();
    //console.log(getTime);

    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;
    console.log(`дней ${getTime.days}`);

    if (getTime.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
    }
  };

  updateClock();
  //countTimer('27 december 2021');
  //setInterval(getTimeRemaining, 1000, '29 december 2021');
};

export default timer;
