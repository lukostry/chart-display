var gulp = require("gulp");
var rename = require("gulp-rename");
var sass = require("gulp-sass");

gulp.task("sass", function() {
    return gulp.src("scss/main.scss")
    .pipe(sass({errLogToConsole: true, outputStyle: "expanded", sourceComments: "map"}))
    .pipe(rename('style.css'))
    .pipe(gulp.dest("css"))
});

gulp.task("watch", function() {
    gulp.watch("scss/**/*.scss", ["sass"]);
});
