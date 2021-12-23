const path = require('path'); // библиотека из Node,формирует абс путь

module.exports = {
  context: path.resolve(__dirname, 'src'), //папку src внесли в контекст и убрали
  entry: './index.js', // убрали из этого пути
  output: {
    // в обьект передаем
    filename: 'js/main.js', // имя исходящего файла
    path: path.resolve(__dirname, 'dist'), // абсолютный путь куда он помещается
  },
  devServer: {
    hot: true,
    static: {
      directory: './dist',
      watch: true,
    },
  },
};
