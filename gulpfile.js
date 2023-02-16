//import gulp from "gulp";
// import {task, src, dest} from 'gulp';

import gulp from 'gulp';
const {task, src, dest} = gulp;

// const { watch, series, src, dest } = require('gulp');
// const { markdown } = require('gulp-markdown');

// Constants
const src_dir = "src/";

// function markdown(cb) {
//     cb();
// }

// function sandbox(cb) {
//     return src('src/*.md')
//     .pipe(dest('output/'));
// }

// function watcher(cb) {
//   watch('src/*.*', build);
// }

// function build(cb) {
//   console.log("Building...");
//   cb();
// }

function hello(cb) {
    console.log("Hello World");
    cb();
}

export default hello;