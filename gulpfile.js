var gulp = 			require('gulp');
var sass = 			require('gulp-sass');
var concat = 		require('gulp-concat');
var jshint = 		require('gulp-jshint');
var autoprefixer = 	require('gulp-autoprefixer');
var cssminify = 	require('gulp-minify-css');
var uglify 	= 		require('gulp-uglify');
var htmlmin = 		require('gulp-htmlmin');
// var browserSync = require('browser-sync').create();

//setup gulp task....can be named anything...we named it styles
gulp.task('styles', function(){
	//return our transformed file
	//we use the gulp.src method to tell gulp what files to look at!
	// we pass in a string that is a path relative to our gulp.js
	return gulp.src('css/*.scss')
			//.pipe pushes data along...into sass()..sass converts scss to css
			//on error log the error nicely
			.pipe( sass().on('error', sass.logError) )
			// concat() takes css data and creates a file to hold data
			.pipe(concat('styles.css'))
			//autoprefixer
			.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
			// gulp.dest() tells concat where to put finished css file!
			.pipe(cssminify())
			.pipe(gulp.dest('css/'));

			// .pipe(browserSync.stream());
});

// reload task
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('jshint', function(){
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost:8888/bootcamp-projects/week-8-project"
    });
});
gulp.task('compress', function() {
  return gulp.src('js/*.js')
  	.pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});
gulp.task('htmlmin', function() {
  return gulp.src('index-dev.html')
    .pipe(htmlmin({removeComments: true, collapseWhitespace: true}))
    .pipe(gulp.dest('index.html'))
});
gulp.task('watch', function(){
	gulp.watch('css/*.scss', ['styles']);
	gulp.watch('js/*.js', ['jshint']);
	// gulp.watch('*.html', ['bs-reload']);
});
gulp.task('production-compile', ['styles', 'compress']);
gulp.task('default', ['styles', 'jshint', 'watch']);


// removed 'browser-sync' from gulp.task




