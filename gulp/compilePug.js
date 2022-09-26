import gulp from "gulp";
import pug from "gulp-pug";
import pugBEM from "gulp-pugbem";

const compilePug = () =>
  gulp
    .src("source/pages/*.pug")
    .pipe(
      pug({
        pretty: process.env.NODE_ENV === "development",
        plugins: [pugBEM],
      })
    )
    .pipe(gulp.dest("build"));

export default compilePug;
