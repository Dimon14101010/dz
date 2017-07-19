const gulp = require ('gulp');
const jshint = require ('gulp-jshint');
const jscs = require ('gulp-jscs');
const concat = require ('gulp-concat');
const eslint = require ('gulp-eslint');

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

gulp.task ('eslint_check' , function () {
    return gulp.src (['app/**/*.js','!app/node_modules/**'])
        .pipe (eslint({rules: {
            'no-alert': 0,
            'no-bitwise': 0,
            'camelcase': 1,
            'curly': 1,
            'eqeqeq': 0,
            'no-eq-null': 0,
            'guard-for-in': 1,
            'no-empty': 1,
            'no-use-before-define': 0,
            'no-obj-calls': 2,
            'no-unused-vars': 0,
            'new-cap': 1,
            'no-shadow': 0,
            'strict': 0,
            'no-invalid-regexp': 2,
            'comma-dangle': 2,
            'no-undef': 1,
            'no-new': 1,
            'no-extra-semi': 0,
            'no-debugger': 2,
            'no-caller': 1,
            'semi': 1,
            'quotes': 0,
            'no-unreachable': 2
        },

            globals: ['$','angular'],

            envs: ['node']}))
        .pipe (eslint.format())

})