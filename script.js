// урок 19/2  метод Date
//
//let date = new Date(1987, 9, 22, 3, 10, 02, 200); // возвращает московское
//let date = new Date(); //
//let date = new Date(0); // получим начальную дату 1970 01 01 00,00,00,00,
// если поставить в Date число , то он примет их как милисекунды
// и вычислит дату
let date = new Date(232323232323); //1977 13 мая пятн

console.log(date);

console.log(date.toDateString()); // только дата
console.log(date.toTimeString()); // только время

console.log(date.toLocaleDateString('ru')); // локализация  ru
console.log(date.toLocaleTimeString('ru'));

console.log(date.toLocaleDateString('en'));
console.log(date.toLocaleTimeString('en'));

console.log(date.toISOString('en') + '    формат iso для серверов'); // формат iso для серверов

console.log(date.toISOString('en').substr(0, 10) + '   только первые - 10 символов(дата)'); //только первые - 10 символов(дата)

console.log(Date.now()); // в милисекундах от 1970 до данного момента
console.log(Date.parse('22 october 1987')); //// в милисекундах от 1970 до указанной даты

//date.setFullYear(1965); //если задать дату до 1970 , то будет отрицательное число
console.log(date.getTime()); //times tamp количество милисекунд с 0 часов 1 января  1970

/*
console.log('год  ' + date.getFullYear());
console.log('месяц ' + (date.getMonth() + 1));
console.log('число месяца  ' + date.getDate());
console.log('день недели  ' + date.getDay());
console.log('час   ' + date.getHours());
console.log('минут   ' + date.getMinutes());
console.log('секунд  ' + date.getSeconds());
*/
//возвращает гринвич
//console.log('месяц ' + (date.getUTCMonth() + 1));
//console.log('число месяца  ' + date.getUTCDate());
//console.log('день недели  ' + date.getUTCDay());
//console.log('час   ' + date.getUTCHours());

// указать время
/*
date.setFullYear(1987, 9, 22); //год месяц и дата
date.setMonth(10, 22); //месяц и дата
date.setDate(22);
date.setHours(3, 22, 22, 200);
//дни недели передать не можем

date.setDate(date.getDate() + 100); //пересчитает число сам
date.setFullYear(1987, 17, 175); //даст 1988 ноябрь 22
date.setMonth(17, 175); //месяцев 17  и дней  175 2022год 22 ноября

console.log('год  ' + date.getFullYear());
console.log('месяц ' + (date.getMonth() + 1));

// 01.01.1970 00.00.00.00

date.setFullYear(1965); //если задать дату до 1970 , то будет отрицательное число
*/
console.log(date.getTime()); //times tamp количество милисекунд с 0 часов 1 января  1970
