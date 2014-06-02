var gulp = require('gulp'),
	jade = require('gulp-jade'),
	prettify = require('gulp-prettify'),
	sass = require('gulp-sass'),
	minifycss = require('gulp-csso'),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync');

gulp.task('init', function() {
	gulp.src('bower/bootstrap-sass-official/vendor/assets/stylesheets/**')
		.pipe(gulp.dest('src/css'))
		.pipe(gulp.src('bower/bootstrap-sass-official/vendor/assets/fonts/**'))
		.pipe(gulp.dest('dist/css'))
		.pipe(gulp.src('bower/bootstrap-accessibility-plugin/plugins/css/**'))
		.pipe(gulp.dest('dist/css'))
		.pipe(gulp.src('bower/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.min.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(gulp.src('bower/jquery/dist/jquery.min.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('bs', function() {
	browserSync.init(null, {
		server: {
			baseDir: "./dist"
		}
	});
});


gulp.task('jade', function() {
	gulp.src('src/templates/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('dist'))
	// If you need prettify HTML, uncomment below 2 lines.
	// .pipe(prettify())
	// .pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('styles', function() {
	gulp.src('src/css/*.scss')
	// If you need sourcemaps, pls. rewrite below options to {style: 'expanded' , sourcemap: true}.
	// But you need to install sass 3.3.
	// If you use bunde install, run 'bundle install --path yourpath' and rewrite option to {bundleExec: true, style: 'expanded' , sourcemap: true}.
	.pipe(sass({
		style: 'expanded',
		sourcemaps: true,
		includePaths: 'src/css/bootstrap'
	}))
		.pipe(gulp.dest('dist/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({
			stream: true,
			once: true
		}));
});

gulp.task('watch', function() {
	gulp.watch(['src/css/**'], ['styles']);
	gulp.watch(['src/templates/**'], ['jade']);
});

gulp.task('default', ['bs', 'styles', 'jade', 'watch']);