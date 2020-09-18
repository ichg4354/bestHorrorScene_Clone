import sass from "gulp-sass";
import gulp from "gulp";

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/styles.css",
  },
};

export function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest));
}
