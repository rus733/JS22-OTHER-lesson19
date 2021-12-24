const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');
  let idInterval;

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    if (timeRemaining <= 0) {
      clearInterval(idInterval);
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    return {
      timeRemaining,
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
    const allTime = getTimeRemaining();
    timerHours.textContent = addZero(allTime.hours);
    timerMinutes.textContent = addZero(allTime.minutes);
    timerSeconds.textContent = addZero(allTime.seconds);
  };

  updateClock();

  idInterval = setInterval(updateClock, 1000);
};

export default timer;
