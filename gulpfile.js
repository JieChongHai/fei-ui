const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require("gulp-minify-css");
const del = require('del');

async function css() {
  await del(['dist/css']);
  return src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('dist/css'));
}

exports.default = css;