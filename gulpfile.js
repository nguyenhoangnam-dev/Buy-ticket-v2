const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const image = require('gulp-imagemin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');

// browser we want to support
// const AUTOPREFIXER_BROWSERS = [
//   '> 1%',
//   'ie >= 8',
//   'edge >= 15',
//   'ie_mob >= 10',
//   'ff >= 45',
//   'chrome >= 45',
//   'safari >= 7',
//   'opera >= 23',
//   'ios >= 7',
//   'android >= 4.4',
//   'bb >= 10'
// ];

function style() {
  // 1. where is my sss file
  return gulp.src('./src/scss/**/*.scss')
    // 2. pass that file through compiler
    .pipe(sass().on('error', sass.logError))
    // 3. where do i save the complete css
    .pipe(gulp.dest('./src/css'))
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
  return gulp.src('./src/img/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/img'));
}

function minifyJs() {
  return gulp.src('./src/js/**/*js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.src('./src/vendor/*.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./dist/js'));
}

function minifyCss() {
  return gulp.src('./src/css/**/*.css')
    .pipe(autoprefixer())
    // Minify css
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'));
}

exports.style = style;
exports.watch = watch;
exports.minifyImage = minifyImage;
exports.minifyJs = minifyJs;
exports.minifyCss = minifyCss;