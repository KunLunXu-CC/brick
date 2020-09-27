/**
 * @name gulpfile.js
 * @description 打包项目css依赖
 * @description 参考 cuke-ui
 */
const path = require('path');
const gulp = require('gulp');
const size = require('gulp-filesize');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-dart-sass');
const cssnano = require('gulp-cssnano');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const { name } = require('../package.json');

const browserList = [
  'last 2 versions',
  'Android >= 4.0',
  'Firefox ESR',
  'not ie < 9',
];

const DIR = {
  // 输入目录
  scss: path.resolve(__dirname, '../components/**/*.scss'),
  buildSrc: path.resolve(__dirname, '../components/**/style/*.scss'),
  style: path.resolve(__dirname, '../components/**/style/index.js'),

  // 输入目录
  lib: path.resolve(__dirname, '../lib'),
  es: path.resolve(__dirname, '../es'),
  dist: path.resolve(__dirname, '../dist'),
};

// 拷贝 scss 文件
gulp.task('copyScss', () => gulp
  .src(DIR.scss)
  .pipe(gulp.dest(DIR.lib))
  .pipe(gulp.dest(DIR.es))
);

// 对 scss 进行编译后拷贝
gulp.task('copyCss', () => gulp
  .src(DIR.scss)
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(autoprefixer({ browsers: browserList }))
  .pipe(size())
  .pipe(cssnano())
  .pipe(gulp.dest(DIR.lib))
  .pipe(gulp.dest(DIR.es))
);

// 创建 style/css.js
gulp.task('createCss', () => gulp
  .src(DIR.style)
  .pipe(replace(/\.scss/, '.css'))
  .pipe(rename({ basename: 'css' }))
  .pipe(gulp.dest(DIR.lib))
  .pipe(gulp.dest(DIR.es))
);

// 编译打包所有组件的样式至 dis 目录
gulp.task('dist', () => gulp
  .src(DIR.buildSrc)
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(autoprefixer({ browsers: browserList }))
  .pipe(concat(`${name}.css`))
  .pipe(size())
  .pipe(gulp.dest(DIR.dist))
  .pipe(sourcemaps.write())
  .pipe(rename(`${name}.css.map`))
  .pipe(size())
  .pipe(gulp.dest(DIR.dist))
  .pipe(cssnano())
  .pipe(concat(`${name}.min.css`))
  .pipe(size())
  .pipe(gulp.dest(DIR.dist))
  .pipe(sourcemaps.write())
  .pipe(rename(`${name}.min.css.map`))
  .pipe(size())
  .pipe(gulp.dest(DIR.dist))
);

gulp.task('default', gulp.parallel(
  'dist',
  'copyCss',
  'copyScss',
  'createCss',
));
