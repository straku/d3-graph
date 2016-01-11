var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');

var babelifyConfig = {
  presets: ['es2015'],
  sourceMaps: 'inline'
};

var live = false;

function clean () {
  del.sync(['dist/**/*']);
}

function setLivereload () {
  live = true;
}

function copyHTML () {
  var task = gulp
    .src('src/index.html')
    .pipe(gulp.dest('dist'));

  if (live) {
    task.pipe(livereload());
  }
}

function copyImages () {
  var task = gulp
    .src('src/images/**/*')
    .pipe(gulp.dest('dist/images'));

  if (live) {
    task.pipe(livereload());
  }
}

function compileSCSS () {
  var task = gulp
    .src('src/scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('dist/css/'));


  if (live) {
    task.pipe(livereload())
  }
}

gulp.task('clean', clean);
gulp.task('copy-html', copyHTML);
gulp.task('copy-images', copyImages);
gulp.task('scss', compileSCSS);
gulp.task('set-livereload', setLivereload);

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

  livereload.listen();

  function bundle() {
    b
      .bundle()
      .on('error', function (err) {
        console.log(err.message);
        this.emit('end');
      })
      .pipe(source('main.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(livereload());
  }
});

gulp.task('watch', function () {
  gulp.watch('src/*.html', copyHTML);
  gulp.watch('src/scss/*.scss', compileSCSS);
  gulp.watch('src/images/**.*', copyImages);
});

gulp.task('build', ['clean', 'copy-html', 'copy-images', 'scss'], function () {
  return browserify('src/js/main.js', {
    debug: false,
    fullPaths: false,
    transform: [babelify.configure(babelifyConfig)]
  })
    .bundle()
    .pipe(source('main.js'))
    .pipe(streamify(uglify({
      mangle: true
    })))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['clean', 'set-livereload', 'copy-html', 'copy-images', 'scss', 'watchify-init', 'watch']);