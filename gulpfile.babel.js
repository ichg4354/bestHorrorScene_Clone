import gulp from "gulp";
import scss from "gulp-sass";
import csso from "gulp-csso";
import del from "del";

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/styles",
    watch: "assets/scss/**",
  },
};

function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(scss())
    .pipe(csso())
    .pipe(gulp.dest(paths.styles.dest));
}

function clean() {
  return del([".gulp-scss-cache"]);
}

function watch() {
  return gulp.watch(paths.styles.watch, style);
}

export const assets = gulp.series([style, clean, watch]);
