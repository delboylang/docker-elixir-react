/*
* Laravel Mix 
*/


let mix = require('laravel-mix');
mix
    .react('src/js/react/app.js', '.')
    .browserSync({
        files:['./index.php','./app.js'],
        proxy: 'localhost:8080'
    })
    .sass('src/sass/app.css', './css')
    .minify('./app.js', './app.min.js');