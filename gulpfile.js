'use strict'

const { src, dest, watch, series, parallel } = require('gulp'),
  sass = require('gulp-sass'), // Sass компиллятор
  sourcemaps = require('gulp-sourcemaps'), // Sourcemaps
  autoprefixer = require('gulp-autoprefixer'), // Автопрефиксер CSS
  uglify = require('gulp-uglify'), // Минификация js
  imagemin = require('gulp-imagemin'), // Компрессия изображений
  imageminPngquant = require('imagemin-pngquant'), // Дополнение для .png
  rigger = require('gulp-rigger'), //Подключение шаблонов
  rimraf = require('rimraf'), // Удаление файлов
  order = require('gulp-order'), // Задаёт порядок конкатенации
  concat = require('gulp-concat'), // Конкатенация
  babel = require('gulp-babel'), // Транспайлер в ES5
  browserSync = require('browser-sync'), // Сервер
  reload = browserSync.reload

//Здесь хранятся пути до всех файлов
const path = {
  //Брать исходники здесь:
  src: {
    html: 'src/html/**/*.html',
    sass: 'src/sass/**/*.sass',
    js: 'src/js/**/*.js',
    img: 'src/images/**/*.*',
    fonts: 'src/fonts/**/*.*',
    libs_js: 'src/libs/**/*.js',
    libs_sass: 'src/libs/**/*.sass',
  },
  //За изменением каких файлов мы хотим наблюдать:
  watch: {
    html: 'src/html/**/*.html',
    js: 'src/js/**/*.js',
    sass: 'src/sass/**/*.sass',
    img: 'src/images/**/*.*',
    fonts: 'src/fonts/**/*.*',
  },
  //Готовые после сборки файлы переносим сюда:
  dist: {
    html: 'dist/',
    css: 'dist/css/',
    js: 'dist/js/',
    img: 'dist/images/',
    fonts: 'dist/fonts/',
  },
  clean: 'dist',
}

//Здесь настройки сервера
const config = {
  server: {
    baseDir: 'dist',
  },
  tunnel: false,
  host: 'localhost',
  port: 8001,
  logPrefix: 'DevServer',
  open: false, //Браузер автоматом не открываем
}

//Сборка html
function html() {
  return src(path.src.html) //Путь до исходных файлов в src
    .pipe(rigger()) //Rigger позволяет использовать шаблоны и подключать их в документы
    .pipe(dest(path.dist.html)) //Вывод готового в dist
    .pipe(reload({ stream: true })) //Обновляем сервер
}

//Сборка css
function style() {
  return src([path.src.sass, path.src.libs_sass]) //Путь до исходных файлов в src
    .pipe(sourcemaps.init()) //Инициализируем sourcemaps
    .pipe(
      sass({
        //Параметры gulp-sass
        sourceMap: true, //sourcemaps выключены
        errLogToConsole: true, //Пишем логи
        outputStyle: 'compressed', //Минифицируем
      })
    )
    .pipe(concat('style.min.css'))
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ['last 10 versions'],
      })
    ) //Добавляем вендорные префиксы, настраивается также через package.json в browserlist
    .pipe(sourcemaps.write()) //Прописываем sourcemaps
    .pipe(dest(path.dist.css)) //Вывод готового в dist
    .pipe(reload({ stream: true })) //Обновляем сервер
}

//Сборка js
function js() {
  return src([path.src.js, path.src.libs_js]) //Путь до исходных файлов в src
    .pipe(rigger()) //Rigger позволяет использовать шаблоны и подключать их в документы
    .pipe(sourcemaps.init()) //Инициализируем sourcemaps
    .pipe(
      babel({
        // Запускаем Babel
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(order([path.src.libs_js, path.src.js]))
    .pipe(concat('main.min.js'))
    .pipe(uglify()) //Минифицируем js
    .pipe(sourcemaps.write()) //Пишем sourcemaps
    .pipe(dest(path.dist.js)) //Вывод готового в dist
    .pipe(reload({ stream: true })) //Обновляем сервер
}

//Оптимизация изображений
function image() {
  return src(path.src.img) //Путь до исходных файлов в src
    .pipe(imagemin({ plugins: [imageminPngquant()] })) //Оптимизация изображений + плагин для png
    .pipe(dest(path.dist.img)) //Вывод готового в dist
    .pipe(reload({ stream: true })) //Обновляем сервер
}

//Шрифты (перенос из src в dist)
function fonts() {
  return src(path.src.fonts) //Вход
    .pipe(dest(path.dist.fonts)) //Выход
    .pipe(reload({ stream: true })) //Обновляем сервер
}

//Очистка
function clean(cb) {
  rimraf(path.clean, cb)
}

//Команды:

//Удалить dist
exports.clean = clean

//Собрать Sass
exports.sass = style

//Собрать js
exports.js = js

//Собрать проект
exports.build = series(clean, html, style, js, image, fonts)

//Запуск сервера
exports.dev = function () {
  browserSync(config)
  watch(path.src.html, html)
  watch(path.src.sass, style)
  watch(path.src.js, js)
  watch(path.src.img, image)
  watch(path.src.fonts, fonts)
}

//По дефолту всё собираем и запускаем сервер
exports.default = parallel(html, style, js, fonts, function () {
  browserSync(config)
  watch(path.src.html, html)
  watch(path.src.sass, style)
  watch(path.src.js, js)
  watch(path.src.img, image)
  watch(path.src.fonts, fonts)
})
