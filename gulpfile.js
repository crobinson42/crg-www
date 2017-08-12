const gulp = require("gulp")
const less = require('gulp-less')
const lessImport = require('gulp-less-import')
const path = require('path')

gulp.task("less", function() {
  console.log("-- gulp is running task 'less'")

  gulp.src("less/**/*.less")
    .pipe(lessImport('styles.less'))
    .pipe(less({
      paths: [ path.join(__dirname, 'less') ]
    }))
    .on('error', console.log)
    .pipe(gulp.dest("assets/css"))
})

gulp.task("watch", function() {
  // watch all .less files and run "less" task if they change
  gulp.watch("less/**/*.less", ["less"])
})

gulp.task("build", ["less"])
gulp.task("dev", ["less", "watch"])