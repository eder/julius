'use strict';

var gulp  = require('gulp'),
    watch = require('gulp-watch'),
    webpack = require('webpack-stream'),
    zip = require('gulp-jszip');


gulp.task('watch', function () {
    gulp.watch('js/*.js', ['build'])
});

gulp.task('build', function() {
    return gulp.src('js/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(''));

});

gulp.task('zip', function() {
    return gulp.src('./deploy/*')
        .pipe(zip({
            name: 'package.zip',
            outpath: './'
        }));
})


gulp.task('deploy', ['zip'], function () {
    var filesToMove = [
        'js/julius.js',
        'js/popup.js',
        'manifest.json',
        'popup.html',
        'julius-128.png',
        'julius-16.png'
    ];
    var er =  new RegExp('js/');
    for(var i = 0; i < filesToMove.length; i++ ) {
        var match = er.test(filesToMove[i]);
        if(match) {
            gulp.src(filesToMove[i]).pipe(gulp.dest('./deploy/js/'));
        } else {
            gulp.src(filesToMove[i]).pipe(gulp.dest('./deploy/'));
        }
    }
})



gulp.task('default', ['watch', 'build', 'deploy', 'zip']);

