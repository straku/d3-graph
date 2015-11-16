var gulp = require('gulp'),
  del = require('del'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  babelify = require('babelify'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  livereload = require('gulp-livereload'),
  colors = require('colors'),
  source = require('vinyl-source-stream');

var babelifyConfig = {
  presets: ['es2015'],
  sourceMaps: 'inline'
};

function clean() {
  del.sync(['dist/**/*']);
}

function copyHTML() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
}

function copyImages() {
  gulp.src('src/images/**/*')
    .pipe(gulp.dest('dist/images'));
}

function compileSCSS() {
  gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('dist/css/'))
    .pipe(livereload());
}

gulp.task('clean', clean);
gulp.task('copy-html', copyHTML);
gulp.task('copy-images', copyImages);
gulp.task('scss', compileSCSS);

gulp.task("watchify-init", function () {
  var b = watchify(browserify({
    entries: ['src/js/main.js'],
    transform: [babelify.configure(babelifyConfig)],
    cache: {},
    packageCache: {},
    debug: true
  }));

  b.on('update', bundle);
  bundle();

  function bundle() {
    b
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(livereload());
  }
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('src/*.html', copyHTML);
  gulp.watch('src/scss/*.scss', compileSCSS);
  gulp.watch('src/images/**.*', copyImages);
});

gulp.task('default', ['clean', 'copy-html', 'copy-images', 'scss', 'watchify-init', 'watch']);