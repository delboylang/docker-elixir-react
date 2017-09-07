/*
* Laravel Mix  (without laravel )
*/
let mix = require('laravel-mix');
mix
    .react('src/react/app.js', './js')
    .browserSync({
        files:['./index.php','./app.js'],
        proxy: 'localhost:8080'
    })
    .sass('src/sass/app.scss', './css')
    .minify()
    .sourceMaps();