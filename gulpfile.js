const { src, dest, task, series, watch, parallel} = require("gulp");
const rm = require("gulp-rm");
const sass = require('gulp-sass')(require('node-sass'));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;
const sassGlob = require("gulp-sass-glob");
const autoprefixer = require("gulp-autoprefixer");
const px2rem = require("gulp-smile-px2rem");
const gcmq = require("gulp-group-css-media-queries");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');
const gulpif = require('gulp-if');
const env = process.env.NODE_ENV;

const {SRC_PATH, DIST_PATH, STYLE_LIBS, JS_LIBS} = require('./gulp.config');

task('clean', () => {
  console.log(env );
  return src(`${DIST_PATH}/**/*`, { read: false })
   .pipe(rm())
});

task('copy:html', () => {
  return src(`${SRC_PATH}/*.html`)
    .pipe(dest(DIST_PATH))
    .pipe(reload({ stream: true }));
 })

task('copy', () => {
return src('src/scss/*.scss').pipe(dest('dist'));
});

const styles = [
  "/node_modules/normalize.css/normalize.css",
  'src/scss/main.scss'
];

task('styles', () => {
  return src([...STYLE_LIBS, 'src/scss/main.scss'])
  .pipe(gulpif(env === 'dev', sourcemaps.init()))
  .pipe(concat('main.min.scss'))
  .pipe(sassGlob())
  .pipe(sass().on('error', sass.logError))
  //.pipe(px2rem())
  .pipe(gulpif(env === 'prod', autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    })))
  .pipe(gulpif(env === 'prod', gcmq()))
  .pipe(gulpif(env === 'prod', cleanCSS()))
  .pipe(gulpif(env === 'dev', sourcemaps.write()))
  .pipe(dest(`${DIST_PATH}/css`)) 
  .pipe(reload({ stream: true }));
 });
  
 task('server', () => {
  browserSync.init({
      server: {
          baseDir: "./dist"
      },
      open: false
  });
 });

 const libs = [
  'node_modules/jquery/dist/jquery.js',
  'src/scripts/*.js'
 ];

 task('scripts', () => {
  return src([...JS_LIBS, 'src/js/*.js'])
  .pipe(gulpif(env === 'dev', sourcemaps.init()))
  .pipe(concat('main.min.js', {newLine: ';'}))
  .pipe(gulpif(env === 'prod', babel({
      presets: ['@babel/env']
    })))
  .pipe(gulpif(env === 'prod', uglify()))
  .pipe(gulpif(env === 'dev', sourcemaps.write()))
  .pipe(dest(DIST_PATH))
  .pipe(reload({ stream: true }));
 });

 task('icons', () => {
  return src('src/svg/sprite.svg')
    .pipe(dest('dist/svg'));
 });

  task('images', () => {
    return src('src/img/**/*.*')
      .pipe(dest('dist/img/'));
   });

 task('copy:video', () => {
   return src(`${SRC_PATH}/video/*.*`)
   .pipe(dest(`${DIST_PATH}/video`))
   .pipe(reload({ stream: true }));
 })

 task('watch', () => {
  watch('./src/scss/*.scss', series('styles'));
  watch('./src/*.html', series('copy:html'));
  watch('./src/js/*.js', series('scripts'));
  watch('./src/svg/*.svg', series('icons'));
 });

task('build',
series('clean',
parallel('copy:html', 'copy:video', 'styles', 'scripts', 'icons', 'images'))
);


task('default',
 series('clean',
  parallel('copy:html', 'copy:video', 'styles', 'scripts', 'icons', 'images'),
  parallel('watch', 'server')
)
);