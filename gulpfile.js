var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	livereload = require('gulp-livereload'),
	minifycss = require('gulp-minify-css'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

gulp.task('style', function () {
  return sass('./public/sass/*.scss')
    .on('error', sass.logError)
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({suffix:'.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({stream:true}));
});

gulp.task('serve',function(){
	browserSync.init({
        proxy: "localhost:3000"
    });
	gulp.watch('./public/sass/*.scss',['style']);
	gulp.watch('./views/*.ejs').on('change',reload);
});

gulp.task('default',['serve'],function(){
	
})