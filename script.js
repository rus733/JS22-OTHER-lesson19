// урок 19/1  методы setTimeout и setInterval
//
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
