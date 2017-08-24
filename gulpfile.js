/**
 **  TuxLab Community Courses
 **  Gulpfile which compiles and packages TuxLab Community Courses
 **  for distribuition.
 **/

  /* CONFIG */
  const coursesDir = './courses/';
  const jsComment =
`/**
 **  TuxLab Course File
 **  Generated ${(new Date).toUTCString()}
 **
 **  Details at https://github.com/learnlinux/tuxlab-courses
 **/

`;

  /* IMPORTS */
  var fs = require('fs');
  var path = require('path');
  var del = require('del');

  var gulp = require('gulp');
  var gulpRename = require('gulp-rename');
  var gulpInsert = require('gulp-insert');
  var gulpTypings = require('gulp-typings');
  var gulpTypescript = require('gulp-typescript');

  /* TASKS */
  gulp.task('clean', function(){
    return del(['courses/*/dist/*.js'])
  })

  gulp.task('typings', function(){
    return gulp.src("./typings.json")
      .pipe(gulpTypings());
  })

  gulp.task('typescript', ['typings', 'clean'], function(){

      return gulp.src(coursesDir + '*/*.ts')

       // Compile with Typescript
       .pipe(gulpTypescript({
         "target": "es2015",
         noImplicitAny: true,
         removeComments: true
       })).js

       // Append Warning Comment
       .pipe(gulpInsert.prepend(jsComment))

       // Pipe to Output
       .pipe(gulpRename(function(path){
         path.dirname += "/dist";
       }))
       
       .pipe(gulp.dest(coursesDir));
  })

  gulp.task('default', ['typescript']);
