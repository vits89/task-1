const { src, dest } = require("gulp"),
    cleanCss = require("gulp-clean-css"),
    less = require("gulp-less");

exports.default = function() {
    return src("less/main.less", { sourcemaps: true })
        .pipe(less())
        .pipe(cleanCss())
        .pipe(dest(".", { sourcemaps: "." }));
};
