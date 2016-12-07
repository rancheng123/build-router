


var gulp = require('gulp'),                             //gulp
    gulpSequence = require('gulp-sequence'),            //按顺序执行任务   插件
    less = require('gulp-less'),                        //编译LESS         插件

    sass = require('gulp-ruby-sass'),                  //编译SASS         插件

    sourcemaps = require("gulp-sourcemaps"),           //SASS地图

    cssver = require('gulp-make-css-url-version'),
    rev = require('gulp-rev-append'),                   //清除页面缓存     插件(给页面的引用添加版本号，清除页面引用缓存。)


    autoprefixer = require('gulp-autoprefixer'),        //浏览器前缀(css3) 插件(设置浏览器版本自动处理浏览器前缀)
    concat = require('gulp-concat'),                    //合并             插件
    order = require('gulp-order'),                    //按指定顺序合并             插件

    htmlmin = require('gulp-htmlmin'),                  //html压缩         插件
    cssmin = require('gulp-minify-css'),                //css 压缩         插件
    uglify = require('gulp-uglify'),                    //js  压缩         插件

    moment = require('moment');                   //时间插件




var cheerio = require('gulp-cheerio');            //抓取页面插件(服务端的 jquery库)
var _ = require("lodash");                        //类似于underscore的工具库



    //问题： 图片压缩一直报错  找不到imagemin模块
    imagemin = require('gulp-imagemin');                //img 压缩         插件
    //pngquant = require('imagemin-pngquant'),            //深度压缩图片     插件
    //cache = require('gulp-cache');                      //只压缩修改图片   插件（只压修改图片，无修改图片 读缓存）



//npm run build pay.all



function Builder(opts){
    this.config = require( opts.path );

}
Builder.prototype = {
    all: function(env){

        //这样写会写死
        //this.css();
        this.sass(env);
        this.js(env);
        this.html(env);
        this.image(env);
    },

    css: function(env){
        var that = this;
        var config = that.config;

        //提示
        throwMessage('build css');

        //合并
        var minObj = that.config.css.min;
        _.each(minObj,function(taskObj,taskName){
            cssMin({
                src: taskObj.src,
                dest: taskObj.dest
            });
        });
    },

    sass: function(env){

        var that = this;

        //提示 
        throwMessage('build Sass');

        //编译sass
        var compileObj = that.config.sass.compile;
        _.each(compileObj,function(taskObj,taskName){
            sassCompile({
                src: taskObj.src,
                destFileName: taskObj.destFileName,
                dest: taskObj.dest
            });
        });

    },

    js: function(env){
        

        var that = this;
        var config = that.config;

        //提示 
        throwMessage('build JS');

        //合并压缩
        var concatObj = that.config.js.concat;
        _.each(concatObj,function(taskObj,taskName){
            jsConcat({
                src: taskObj.src,
                destFileName: taskObj.destFileName,
                dest: taskObj.dest,
                env: env
            });
        });


        //复制压缩
        var minObj = that.config.js.min;
        _.each(minObj,function(taskObj,taskName){
            jsMin({
                src: taskObj.src,
                dest: taskObj.dest
            });
        });







        //复制json（假数据）
        var jsonCopyObj = that.config.js.jsonCopy;
        _.each(jsonCopyObj,function(taskObj,taskName){
            jsonCopy({
                src: taskObj.src,
                dest: taskObj.dest
            });
        });

    },
    html: function(env){

        var that = this;
        var config = that.config;


        //提示
        throwMessage('build Html');

        var copyObj = that.config.html.copy;
        _.each(copyObj,function(taskObj,taskName){
            htmlCopy({
                src: taskObj.src,
                dest: taskObj.dest
            });
        });



        /*function clearCache(){
            var srcPath = '../code/src/';
             var destPath = '../code/dest/';
             gulp.src(srcPath+'index.html')
             .pipe(rev())
             //指定目录（被生成）
             .pipe(gulp.dest(destPath));
        }*/

    },
    image: function(env){
        var that = this;
        var config = that.config;

        //提示 
        throwMessage('build Image');

        var copyObj = that.config.image.copy;
        _.each(copyObj,function(taskObj,taskName){
            imageCopy({
                src: taskObj.src,
                dest: taskObj.dest
            });
        });
       
    },
    watch: function(env){

        

        var that = this;
        var config = that.config;

         //提示 
        throwMessage('start Watch');

        //监控js
        watchTask(that,that.config.js,that.js);


        //监控html
        watchTask(that,that.config.html,that.html);

        //监控sass
        watchTask(that,that.config.sass,that.sass);

        //监控image
        watchTask(that,that.config.image,that.image);



    },


    //替换路径
    replaceUrl: function(env){
        var that = this;

        //去掉首个/  ,如 /test/src/index.html   -->  test/src/index.html
        var src = that.config.replaceUrl.js.src;
        if(src.charAt(0) == "/"){
            src = src.substring(1)
        };

        var dest = that.config.replaceUrl.js.dest;
        if(dest.charAt(0) == "/"){
            dest = dest.substring(1)
        };





        gulp.src(src)
        .pipe(cheerio(function ($) {

            var concatObj = that.config.js.concat;
            _.each(concatObj,function(taskObj,taskName){

                //放入 合并文件
                $('script[src="'+ taskObj.src[0].replace(that.config.srcPath,'/') +'"]')
                 .after( $('<script src="'+ (taskObj.dest+taskObj.destFileName)
                .replace(that.config.destPath,'/') +'"></script>') );

                //删除 被合并文件
                _.each(taskObj.src,function(src,i){
                    var src = src.replace(that.config.srcPath,'/');
                    $('script[src="'+ src +'"]').remove();
                });
            });
        }))
        .pipe(gulp.dest(dest));
    }


};

module.exports =  Builder;




//编译sass
function sassCompile(opts){
    sass( opts.src , {
        //生成map地铁
        sourcemap : true
    })
        .on('error', sass.logError)
        .pipe(sourcemaps.write())

        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest( opts.dest ))
}

//js合并压缩
function jsConcat(opts){

    //开发环境
    if(opts.env == 'dev'){
        gulp.src( opts.src  )
            //生成sourceMap（chrome浏览器支持）
            .pipe(sourcemaps.init())
            .pipe(concat( opts.destFileName ))//合并后的文件名
            .pipe(uglify({
                mangle: true,//是否混淆
                compress: true,//是否完全压缩
                preserveComments: 'all' //保留所有注释
            }))
            //生成sourceMap（chrome浏览器支持）
            .pipe(sourcemaps.write())
            .pipe(gulp.dest( opts.dest ));
    }
    //线上环境
    else{
        gulp.src( opts.src  )
            .pipe(concat( opts.destFileName ))//合并后的文件名
            .pipe(uglify({
                mangle: true,//是否混淆
                compress: true,//是否完全压缩
                preserveComments: 'license' //保留所有注释
            }))
            .pipe(gulp.dest( opts.dest ));
    }



};

//js复制压缩
function jsMin(opts){
    gulp.src( opts.src )
        .pipe(uglify({
            mangle: true,//是否混淆
            compress: true,//是否完全压缩
            preserveComments: 'all' //保留所有注释
        }))
        .pipe(gulp.dest( opts.dest ));
}

//复制json（假数据）
function jsonCopy(opts){
    gulp.src(opts.src)
        .pipe(gulp.dest(opts.dest));
}



//js复制压缩
function cssMin(opts){
    gulp.src( opts.src )
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true//类型：Boolean 默认：false [是否保留换行]
        }))
        .pipe(gulp.dest( opts.dest ));
}


//html复制
function htmlCopy(opts){
    gulp.src(opts.src)
        .pipe(rev())
        //.pipe( ranRev() )
        .pipe(gulp.dest(opts.dest));
};


//复制image
function imageCopy(opts){
    gulp.src(opts.src)

        //.pipe(imagemin())
        .pipe(gulp.dest(opts.dest));
}


//设置监控任务
function watchTask(oContext,obj,callback){
    var srcs = collectSrcValue(obj);
    gulp.watch(srcs, function(){
        //提示
        throwMessage('changed');
        callback.call(oContext);
    });
};

//收集监控区域
function collectSrcValue(obj){
    var res = [];
    _.each(obj,function(childObj,key){
        if( !_.isEmpty(childObj) ){
            _.each(childObj,function(taskObj,key){
                //数组
                if(taskObj.src.length){
                    res = res.concat(taskObj.src);
                }else{
                    res.push(taskObj.src)
                }
            });
        }
    });
    return res;
};



//消息
function throwMessage(message){
    console.log('['+moment(new Date()).format('HH:mm:ss')+']------------------ ' + message + ' -------------------');
};








//命令行 运行gulpfile.js
    //gulp  testLess (单个执行任务)
    //gulp  default  (批量执行任务)

//说明
    //gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
    //gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
    //gulp.dest(path[, options]) 处理完后文件生成路径


//目录及文件
    //  'src/less/index.less'                   //指定目录  指定文件   less后缀
    //  'src/less/*    .less'                   //指定目录  所有文件   less后缀
    //  'src/*   /*    .less'                   //一级目录  所有文件   less后缀
    //  'src/*   /*    .*'                      //一级目录  所有文件   所有后缀
    //  'src/*   /*    .{js,css,html}'          //一级目录  所有文件   js和css和html后缀
    //  'src/*   /{a,b}.{js,css,html}'          //一级目录  a和b文件   js和css和html后缀
    //  'src/**  /*    .less'                   //所有目录  所有文件   less后缀
    //  '!src/** /rancheng.less'                  //除了（不包含）所有目录  rancheng   less后缀

