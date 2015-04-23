var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
    return gulp.src([
      'app/**/*.js',
      'server/*.js'
    ])
    .pipe(eslint({ config: './.eslint' }))
    .pipe(eslint.format())
});

