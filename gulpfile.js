var gulp     = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin   = require('gulp-svgmin'),
    rename   = require('gulp-rename');

gulp.task('svgstore', function () {
    return gulp.src('svg/icons/**/*.svg')
            .pipe(rename({prefix: 'icon--'}))
            .pipe( svgmin() )
            .pipe(svgstore({
                inlineSvg: true
            }))
            .pipe(gulp.dest('svg/build/'));
});