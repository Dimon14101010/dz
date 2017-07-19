const gulp = require ('gulp');
const jshint = require ('gulp-jshint');
const jscs = require ('gulp-jscs');
const concat = require ('gulp-concat');

gulp.task ('copy_index_1',function () {
   return gulp
        .src ('index.html')
        .pipe (gulp.dest('temp1/'));
});
gulp.task ('copy_index_2',['copy_index_1'],function () {
    return gulp
        .src ('temp1/*')
        .pipe (gulp.dest('temp2/'));
});

gulp.task('vet',function () {
    return gulp.src('app/**/*.js')
        .pipe (jshint({esversion: 6}))
        .pipe (jshint.reporter ('default'))
        .pipe (jscs())
        .pipe (jscs.reporter());
});
gulp.task ('build_js',function () {
    return gulp.src ('app/**/*.js')
        .pipe (concat('all.js'))
        .pipe (gulp.dest ('dist/'))
});
gulp.task ('watcher' , function () {
   return gulp.watch ('app/**/*.js', ['bulid_js'])
});