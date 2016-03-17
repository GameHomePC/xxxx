"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';

let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass'),
    spritesmith = require('gulp.spritesmith'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    gutil = require('gulp-util'),
    gulpIf = require('gulp-if');

let conf = {
    localServer: 'xxxx.loc',
    sass: {
        watch: './sass/**/*.scss',
        watchCss: './css/**/*.css',
        libSass: './sass/**/*.scss',
        css: './css',
        map: './'
    },
    js: {
        root: './js/**/*.js'
    },
    templatesPath: './php/**/*.php',
    sprite: {
        rootSprite: "images/sprite/*.*",
        imagesSprite: "./images",
        cssSprite: "./sass/sprite"
    },
    images: {
        rootImages: "images/**/**.*",
        imagesImages: "./images"
    },
    scripts: {
        watch: './js/*.js',
        src: ['./js/lib/*.js','./js/main.js'],
        dest: "./js/build"
    },
    forum: {
        sass: {
            src: "./forum/Themes/Redsy/sass/*.scss",
            dist: "./forum/Themes/Redsy/css/",
            watch: "./forum/Themes/Redsy/sass/**/*.scss"
        }
    }
};

// ==============
// scripts
// ==============
gulp.task('scripts', function() {
    return gulp.src(conf.scripts.src)
        .pipe(concat('all.js'))
        .pipe(gulpIf(NODE_ENV == "production", uglify()))
        .pipe(gulp.dest(conf.scripts.dest))
        .pipe(browserSync.reload({stream: true}));
});

// ==============
// optimizationImages
// ==============
gulp.task('optimizationImages', function () {
    return gulp.src(conf.images.rootImages)
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true,
            optimizationLevel: 7,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(conf.images.imagesImages));
});

// ==============
// sprite
// ==============
gulp.task('sprite', function () {
    var spriteData = gulp.src(conf.sprite.rootSprite).pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        padding: 5,
        cssTemplate: 'handlebarsStr.css.handlebars'
    }));

    spriteData.img.pipe(gulp.dest(conf.sprite.imagesSprite));
    spriteData.css.pipe(gulp.dest(conf.sprite.cssSprite));
});

// ==============
// sass
// ==============
gulp.task('sass', function () {
    gulp.src(conf.sass.libSass)
        .pipe(gulpIf(NODE_ENV != "production", sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 100 version'] }) ]))
        .pipe(gulpIf(NODE_ENV == "production", minifyCss()))
        .pipe(gulpIf(NODE_ENV != "production", sourcemaps.write()))
        .pipe(gulp.dest(conf.sass.css))
        .pipe(browserSync.reload({stream: true}));
});

// ==============
// browser-sync
// ==============
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: {
            target: conf.localServer
        },
        open: false,
        ghostMode: {
            scroll: false,
            click: false
        }
    });
});

// ==============
// forum
// ==============
gulp.task('sassForum', function () {
    gulp.src(conf.forum.sass.src)
        .pipe(gulpIf(NODE_ENV != "production", sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 100 version'] }) ]))
        .pipe(gulpIf(NODE_ENV == "production", minifyCss()))
        .pipe(gulpIf(NODE_ENV != "production", sourcemaps.write()))
        .pipe(gulp.dest(conf.forum.sass.dist))
        .pipe(browserSync.reload({stream: true}));
});


// ==============
// watch
// ==============
gulp.task('watch', function() {
    gulp.watch(conf.templatesPath).on('change', browserSync.reload);
    gulp.watch(conf.sass.watch, ['sass']);
    gulp.watch(conf.forum.sass.watch, ['sassForum']);
    gulp.watch(conf.sprite.rootSprite, ['sprite']);
    gulp.watch(conf.scripts.watch, ['scripts']);
});

// ==============
// dev
// ==============
gulp.task('dev', ['browser-sync', 'sass', 'sassForum', 'watch', 'sprite', 'scripts']);

// ==============
// prod
// ==============
gulp.task('prod', ['sass', 'sassForum', 'sprite', 'scripts']);