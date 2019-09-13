'use strict';

const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const rigger = require('gulp-rigger');
const rimraf = require('rimraf');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

//Здесь хранятся пути до всех файлов
var path = {
    //Брать исходники здесь:
    src: { 
        html:  'src/html/**/*.html',
        sass:  'src/sass/**/*.sass',
        js:    'src/js/**/*.js',
        img:   'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    //За изменением каких файлов мы хотим наблюдать:
    watch: { 
        html:  'src/html/**/*.html',
        js:    'src/js/**/*.js',
        sass: 'src/sass/**/*.sass',
        img:   'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    //Готовые после сборки файлы переносим сюда:
    dist: { 
        html:  'dist/',
        css:   'dist/css/',
        js:    'dist/js/',
        img:   'dist/images/',
        fonts: 'dist/fonts/'
    },
    clean: 'dist'
};

//Здесь настройки сервера
var config = {
    server: {
        baseDir: "dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 8000,
    logPrefix: "DevServer",
    open: false //Браузер автоматом не открываем
};

//Сборка html
function html_build() {
    return src(path.src.html) //Путь до исходных файлов в src
        .pipe(rigger()) //Rigger позволяет использовать шаблоны и подключать их в документы
        .pipe(dest(path.dist.html)) //Вывод готового в dist
        .pipe(reload({stream: true})); //Обновляем сервер
}

//Сборка css
function style_min_build() {
    return src(path.src.sass) //Путь до исходных файлов в src
        .pipe(sourcemaps.init()) //Инициализируем sourcemaps
        .pipe(sass({ //Параметры gulp-sass
            sourceMap: true, //sourcemaps включены
            errLogToConsole: true, //Пишем логи
            outputStyle: 'compressed' //Минифицируем
        }))
        .pipe(autoprefixer()) //Добавляем вендорные префиксы, настраивается через package.json в browserlist
        .pipe(sourcemaps.write()) //Прописываем sourcemaps
        .pipe(dest(path.dist.css)) //Вывод готового в dist
        .pipe(reload({stream: true})); //Обновляем сервер
}

//Сборка css без минификации
function style_build() {
    return src(path.src.sass) //Путь до исходных файлов в src
        .pipe(sourcemaps.init()) //Инициализируем sourcemaps
        .pipe(sass({ //Параметры gulp-sass
            sourceMap: true, //sourcemaps включены
            errLogToConsole: true, //Пишем логи
            
        }))
        .pipe(autoprefixer()) //Добавляем вендорные префиксы, настраивается через package.json в browserlist
        .pipe(sourcemaps.write()) //Прописываем sourcemaps
        .pipe(dest(path.dist.css)) //Вывод готового в dist
        .pipe(reload({stream: true})); //Обновляем сервер
}

//Сборка js
function js_build() {
    return src(path.src.js) //Путь до исходных файлов в src
        .pipe(rigger()) //Rigger позволяет использовать шаблоны и подключать их в документы
        .pipe(sourcemaps.init()) //Инициализируем sourcemaps
        .pipe(uglify()) //Минифицируем js
        .pipe(sourcemaps.write()) //Пишем логи
        .pipe(dest(path.dist.js)) //Вывод готового в dist
        .pipe(reload({stream: true})); //Обновляем сервер
}

//Оптимизация изображений
function image_build() {
    return src(path.src.img) //Путь до исходных файлов в src
        .pipe(imagemin({plugins: [imageminPngquant()]})) //Оптимизация изображений + плагин для png
        .pipe(dest(path.dist.img)) //Вывод готового в dist
        .pipe(reload({stream: true})); //Обновляем сервер
}

//Шрифты (перенос из src в dist)
function fonts_build() {
    return src(path.src.fonts) //Вход
        .pipe(dest(path.dist.fonts)) //Выход
        .pipe(reload({stream: true})); //Обновляем сервер
}

//Очистка
function clean(cb) {
    rimraf(path.clean, cb);
}

//Команды:

//Удалить dist
exports.clean = clean;

//Собрать Sass без минификации
exports.sass = style_build;

//Собрать проект
exports.build = series(clean, html_build, style_min_build, js_build, image_build, fonts_build);

//Запуск сервера
exports.dev = function() {
    browserSync(config)
    watch(path.src.html, html_build)
    watch(path.src.sass, style_min_build)
    watch(path.src.js, js_build)
    watch(path.src.img, image_build)
    watch(path.src.fonts, fonts_build)
}

//По дефолту всё собираем и запускаем сервер
exports.default = parallel(html_build, style_min_build, js_build, image_build, fonts_build, function() {
    browserSync(config)
    watch(path.src.html, html_build)
    watch(path.src.sass, style_min_build)
    watch(path.src.js, js_build)
    watch(path.src.img, image_build)
    watch(path.src.fonts, fonts_build)
})