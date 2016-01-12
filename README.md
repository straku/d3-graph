# d3-graph

To run locally with live reloading enabled ([gulp-livereload](https://github.com/vohof/gulp-livereload), chrome extension or middleware needed) type:
```
gulp
```
To build (minification, no live reloading) type:
```
gulp build
```

-----------------------------------------------------------

The purpose of this visualization was to resemble graphic project created by designer rather than letting `d3.layout.force` to do its job. Additionally visualization needed to be partially dynamic - nodes oscillate in random directions with random amplitudes and are attracted by mouse pointer.

In order to give graph desired look nodes with images and main node have fixed positions. For the same purpose some links are relatively longer.

Data structures describing nodes and links are defined in `src/js/data.js` file.

File `src/js/graph-config.js` contains some of the `d3.layout.force` parameters that I believe are **relatively** safe to change without breaking layout. There are also parameters responsible for mouse pointer pull strength and animation. Feel free to play and break.

Although I consider this project complete if you have any suggestions for improvements / questions feel free to use issues or PR.
