//console.log(window);
//window.setTimeout(() => {
// console.log('привет я setTimeout');
//}, 2000);
//
//setTimeout(() => {
//window не обязательно
//  console.log('привет я setTimeout');
//}, 2000);
//////////////////////////
//const logger = () => {
//console.log('привет я setTimeout');
//};

//setTimeout(logger, 2000); //метод вызывает logger, поэтому нет скобок
/////////////////////////
//ФУНКЦИЯ обертка  , если нужно работать с параметрами

/*
const logger = (str) => {
  console.log(`Привет, я ${str}`);
};

//setTimeout(() => {
//logger('setTimeout');
//}, 2000);

let idTimeout = setTimeout(() => {
  logger('setTimeout');
}, 2000);

clearTimeout(idTimeout); //методы очистки

/////////////////
//метод setInterval
setInterval(() => {
  logger('setInterval');
}, 2000);
*/

/*
//включатель , выключатель 

//let count = 0;
let active = false;
let idTimeout;
document.addEventListener('click', () => {
  if (active) {
    active = false;
  } else {
    active = true;
  }

  logger('setTimeout');
  //console.log(active);
});

const logger = (str) => {
  if (active) {
    console.log(`Привет, я ${str}`);
    idTimeout = setTimeout(() => {
      logger('setTimeout');
    }, 500);
  } else {
    clearTimeout(idTimeout);
  }
};

//clearTimeout(idTimeout);
*/
/*
///очистить интервол по счетчику
let idInterval = setInterval(() => {
  count++;
  logger('setInterval');

  if (count === 10) clearInterval(idInterval);
}, 500);
*/

/// упростим  включатель выключатель
/*
//let count = 0;
let active = false;
let idTimeout;
document.addEventListener('click', () => {
  //if (active) {
  //  active = false;
  //} else {
  //  active = true;
  //}
  active = !active;

  logger('setTimeout');
  //console.log(active);
});

const logger = (str) => {
  if (active) {
    console.log(`Привет, я ${str}`);
    idTimeout = setTimeout(() => {
      logger('setTimeout');
    }, 500);
  } else {
    clearTimeout(idTimeout);
  }
};
*/
/////////////практика  человечек и самолетик

//через setTimeout
/*
const airplane = document.querySelector('.airplane');
const man = document.querySelector('.man');

let count = 0;

const flyAnimate = () => {
  count++;
  console.log(count);
  man.style.top = count + 'px';
  airplane.style.left = count * 3 + 'px';

  if (count < 200) setTimeout(flyAnimate, 10);
};
flyAnimate();
*/

//через setInterval

const airplane = document.querySelector('.airplane');
const man = document.querySelector('.man');

let active = false;
let idInterval;
let count = 0;

const flyAnimate = () => {
  count++;
  idInterval = requestAnimationFrame(flyAnimate);
  if (count < 200) {
    man.style.top = count + 'px';
    airplane.style.left = count * 3 + 'px';
  } else if (count < 500) {
    airplane.style.left = count * 3 + 'px';
  } else {
    cancelAnimationFrame(idInterval);
  }
};
// переключатель старта анимации
document.addEventListener('click', () => {
  if (active) {
    cancelAnimationFrame(idInterval);
    active = false;
  } else {
    idInterval = requestAnimationFrame(flyAnimate);
    active = true;
  }
});

flyAnimate();
