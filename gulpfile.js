let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');



gulp.task('scss', function () {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});

// gulp.task('js', function () {
//     return gulp.src([
//         'node_modules',
//     ])
// });

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('app/*.html', gulp.parallel('html'))

});

gulp.task('default', gulp.parallel('browser-sync','watch'))