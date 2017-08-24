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

  var gulp = require('gulp');
  var gulpInsert = require('gulp-insert');
  var gulpTypings = require('gulp-typings');
  var gulpTypescript = require('gulp-typescript');

  /* TASKS */
  gulp.task('typings', function(){
    return gulp.src("./typings.json")
      .pipe(gulpTypings());
  })

  gulp.task('typescript', ['typings'], function(){

      return gulp.src(coursesDir + '*/*.ts')

       // Compile with Typescript
       .pipe(gulpTypescript({
         noImplicitAny: true,
         outdir: "./dist",
         filesGlob : [
            "node_modules/@types",
            "typings/index.d.ts"
          ],
       })).js

       // Append Warning Comment
       .pipe(gulpInsert.prepend(jsComment))

       // Pipe to Output
       .pipe(gulp.dest(coursesDir))
  })

  gulp.task('default', ['typescript']);
