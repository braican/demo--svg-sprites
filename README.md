# SVG

They're the best.

## Setup
To set this repo up and start playing around with SVG:
1. Download the zip.
1. Reun `npm install` to set up gulp and all the relevant dependencies.

## Snippets

#### Gulp
The gulp task to build an svg sprite that will contain all of your svgs. 
```js
var gulp     = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin   = require('gulp-svgmin'),
    rename   = require('gulp-rename');

gulp.task('svgstore', function () {
    return gulp
            
            // the path that contains all of your source svg files
            .src('svg/icons/**/*.svg')

            // I like to set up a namespace for my icons, since this
            //  will attach ID's to each <symbol> item in the sprite
            .pipe(rename({prefix: 'icon--'}))

            // minify the svg
            .pipe( svgmin() )

            // output only <svg> element without <?xml ?> and DOCTYPE
            .pipe(svgstore({
                inlineSvg: true
            }))

            // the directory to which we are saving the full sprite
            .pipe(gulp.dest('svg/build/'));
});
```

#### JavaScript to inline the sprite
This snippet will grab the built svg sprite in the `dest` directory from above and insert it into html.

**HTML**
```html
<!-- this is the element that we will put the svg sprite into -->
<div style="height: 0; width: 0; position: absolute; visibility: hidden" id="svg-sprite"></div>
```

**JS**
```js

// open a new xmlhttprequest
var request    = new XMLHttpRequest();

// select the document we're going to put the sprite into
var spriteDiv  = document.getElementById("svg-sprite");

// the path to the source svg sprite
var spritePath = "svg/build/icons.svg";

// load up the svg
request.open('GET', spritePath, true);

// when the request has been loaded, check to see if the svg has been
//  loaded alright (based on the given status). If it's good, set the
//  DOM element's innerHTML to the content from the loaded svg.
//  Otherwise, throw an error.
request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        var resp = this.response;
        spriteDiv.innerHTML = resp;
    } else {
        console.error("There was an error getting the icons");
    }
};

// just a check for a request error
request.onerror = function() {
    console.error("There was an error getting the icons");
};

// send the request!
request.send();
```

## Other links
* [gulp-svgstore](https://github.com/w0rm/gulp-svgstore) - the gulp task.
* [svg-encode](https://github.com/braican/svg-encode) - npm module to copy a URI encoded svg to your clipboard, for use as a data URI.
