/**
 * Created by wangpeng on 2015/5/29.
 */
var gulp = require('gulp');
var debug = require('gulp-debug');
var path = require('path');

module.exports = {
    //创建
    createModule: function () {
        var type = arguments[0];

        var source =__dirname+'/../example/simple/**/*.*';
        var targetPath = process.cwd();

        if (type == 'app') {
            source = __dirname+'/../example/app/**'
        };
        source =  path.normalize(source);

        console.log('[gulp-generater]ready to copy to ',targetPath,'type is',type);

        gulp.src([source])
            .pipe(debug({title:'debug:',minimal:false}))
            .pipe(gulp.dest(targetPath));
    }
};