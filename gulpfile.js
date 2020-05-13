var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var data = require('gulp-data');
var concatCSS = require('gulp-concat-css');
var concatJS = require('gulp-concat');
var stripCssComments = require('gulp-strip-css-comments');
var nunjucksRender = require('gulp-nunjucks-render');
var uglify = require('gulp-uglify');
var wrap = require('gulp-wrap-js');

var PATH = {
	APP: './app/',
	APP_CSS: './app/css',
	APP_SCSS: './app/scss',
	APP_JS: './app/js',
	DATA: './app/data',
	TEMPLATES: './app/templates',
	PARTIALS: './app/templates/partial',
	MACROS: './app/templates/macros',
	SRC: './src',
	SRC_JS: './src/js',
	SRC_CSS: './src/css'
};

gulp.task('sass-bootstrap', function (done) {
	gulp
		.src([PATH.APP_SCSS.concat('/custom/bootstrap.scss')])
		.pipe(sass())
		.pipe(stripCssComments())
		.pipe(concatCSS('customs.css'))
		.pipe(gulp.dest(PATH.SRC_CSS))
		.pipe(browserSync.stream());
	done();
});

gulp.task('sass-vendor', function (done) {
	// site
	gulp
		.src([
			// PATH.APP_SCSS.concat('/custom/bootstrap.scss'),
			// './node_modules/bootstrap/scss/bootstrap.scss',
			'./node_modules/daterangepicker/daterangepicker.css'
		])
		.pipe(sass())
		.pipe(stripCssComments())
		.pipe(concatCSS('vendor.css'))
		.pipe(gulp.dest(PATH.SRC_CSS))
		.pipe(browserSync.stream());
	done();
});

gulp.task('sass-bundle', function (done) {
	gulp
		.src([
			// PATH.APP_SCSS.concat('/fonts.scss'),
			// PATH.APP_SCSS.concat('/layouts.scss'),
			// PATH.APP_SCSS.concat('/styles.scss'),
			// PATH.APP_SCSS.concat('/bs-reset.scss'),
			// PATH.APP_SCSS.concat('/bs-reset.scss'),
			PATH.APP_SCSS.concat('/**.scss')
		])
		.pipe(sass())
		.pipe(stripCssComments())
		.pipe(concatCSS('bundle.css'))
		.pipe(gulp.dest(PATH.SRC_CSS))
		.pipe(browserSync.stream());
	done();
});

gulp.task('js-vendor', function (done) {
	gulp
		.src([
			'./node_modules/jquery/dist/jquery.js',
			'./node_modules/popper.js/dist/umd/popper.js',
			'./node_modules/bootstrap/dist/js/bootstrap.js',
			'./node_modules/moment/moment.js',
			'./node_modules/daterangepicker/daterangepicker.js'
		])
		.pipe(concatJS('vendor.js'))
		.pipe(gulp.dest(PATH.SRC_JS))
		.pipe(browserSync.stream());
	done();
});

gulp.task('js-bundle', function (done) {
	gulp
		.src([
			PATH.APP_JS.concat('/modules/**.js'),
			PATH.APP_JS.concat('/ui/**.js'),
			PATH.APP_JS.concat('/**.js')
		])
		.pipe(concatJS('bundle.js'))
		.pipe(wrap('(function(){ %= body % })();'))
		.pipe(uglify())
		.pipe(gulp.dest(PATH.SRC_JS))
		.pipe(browserSync.stream());
	done();
});

gulp.task('nunjucks', function (done) {
	gulp
		.src([
			'./app/**/**/**.+(html|nunjucks)',
			'./app/**/**.+(html|nunjucks)',
			'./app/**.+(html|nunjucks)'
		])
		.pipe(
			data(function () {
				return require(PATH.DATA.concat('/navbar.json'));
			})
		)
		.pipe(
			data(function () {
				return require(PATH.DATA.concat('/topnavbar.json'));
			})
		)
		.pipe(
			data(function () {
				return require(PATH.DATA.concat('/orders-list-group.json'));
			})
		)
		.pipe(
			data(function () {
				return require(PATH.DATA.concat('/toursearch-form.json'));
			})
		)
		.pipe(nunjucksRender({ path: [PATH.TEMPLATES] }))
		.pipe(gulp.dest('src'));
	done();
});

// Static Server + watching scss/html files
gulp.task('serve', function (done) {
	// index.html
	browserSync.init({ server: PATH.SRC });

	// gulp.watch(
	// 	'./node_modules/bootstrap/scss/bootstrap.scss',
	// 	gulp.series('sass-vendor')
	// );
	gulp.watch(PATH.APP_SCSS.concat('/*.scss'), gulp.series('sass-bundle'));

	gulp.watch(PATH.PARTIALS.concat('/*.(html|nunjucks)')).on('change', () => {
		// browserSync.reload;
		browserSync.resume;
		done();
	});

	gulp.watch(PATH.APP.concat('/*.(html|nunjucks)')).on('change', () => {
		browserSync.resume;
		done();
	});
	// done();
});

gulp.task(
	'default',
	gulp.series(
		'sass-bootstrap',
		'sass-vendor',
		'sass-bundle',
		'js-vendor',
		'js-bundle',
		'nunjucks',
		'serve'
	)
);
