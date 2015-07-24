"use strict";

var gulp  = require("gulp"),
    watch = require('gulp-watch'),
    webpack = require('webpack-stream');

gulp.task("watch", function () {
    gulp.watch("js/*.js", ['build'])
});

gulp.task("build", function() {
    return gulp.src('js/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(''));

});

gulp.task("default", ["watch", "build"]);


