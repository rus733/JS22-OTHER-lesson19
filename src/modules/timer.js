const timer = (deadline) => {
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
    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const addZero = (arg) => {
    if (arg < 10) {
      return '0' + arg;
    } else {
      return arg;
    }
  };

  const updateClock = () => {
    getTime = getTimeRemaining();

    if (getTime.timeRemaining > 0) {
      timerHours.textContent = addZero(getTime.hours);
      timerMinutes.textContent = addZero(getTime.minutes);
      timerSeconds.textContent = addZero(getTime.seconds);
      console.log(`дней ${getTime.days}`);
    } else {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  };

  let idInterval = setInterval(() => {
    updateClock();
    if (getTime.timeRemaining <= 0) {
      clearInterval(idInterval);
    }
  }, 1000);
};

export default timer;
