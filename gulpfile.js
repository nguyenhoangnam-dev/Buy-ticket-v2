const gulp = require('gulp');
const {series, parallel, src, dest} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const image = require('gulp-imagemin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');

function style() {
  // 1. where is my sss file
  return src('./src/scss/**/*.scss')
    // 2. pass that file through compiler
    .pipe(sass().on('error', sass.logError))
    // 3. where do i save the complete css
    .pipe(dest('./src/css'))
  // 4. stream changes to all browser
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });
  gulp.watch('./src/scss/**/*.scss', style);
  gulp.watch('./src/**/*.html').on('change', browserSync.reload);
  gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

function minifyImage() {
  return src('./src/img/*')
    .pipe(image())
    .pipe(dest('./docs/img'));
}

function minifyJs() {
  return src('./src/js/**/*js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    //.pipe(gulp.src('./src/vendor/*.js'))
    //.pipe(gulp.dest('./docs/js'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('./docs/js'));
}

function minifyCss() {
  return src('./src/css/**/*.css')
    .pipe(autoprefixer())
    // Minify css
    .pipe(csso())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('./docs/css'));
}

function minifyHtml() {
  return src('./src/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(dest('./docs'))
}

exports.style = style;
exports.watch = watch;
exports.minifyImage = minifyImage;
exports.minifyJs = minifyJs;
exports.minifyCss = minifyCss;
exports.minifyHtml = minifyHtml;
exports.default = series(minifyImage, parallel(minifyJs, parallel(minifyCss, minifyHtml)));