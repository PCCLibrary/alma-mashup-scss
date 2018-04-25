'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      zip = require('gulp-zip');

//style paths
var scssFiles = 'src/scss/**/*.scss',
    cssDest = 'branding_skin/css/';

gulp.task('styles', function(){
    gulp.src(scssFiles)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});


gulp.task('zip', function() {
    gulp.src(
        [
            './branding_skin/**/*'
        ], {base: '.'}
    )

        .pipe(zip('skin.zip'))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['styles', 'zip']);
