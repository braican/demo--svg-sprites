# SVG sprites

They're awesome.

## Setup

1. `npm init` - to create the `package.json` file.
1. `npm install gulp --save-dev` - to install gulp locally to the project and saves (because of the `--save-dev` flag) it to the `devDependencies` in the `package.json` file.
1. `npm install gulp-svgstore --save-dev` - to install svgstore (https://github.com/w0rm/gulp-svgstore), which is the task that will create the svg sprite.
1. `npm install gulp-svgmin --save-dev` - to install svgmin, which will optimize our svg files (https://github.com/ben-eb/gulp-svgmin).
1. `npm install gulp-rename --save-dev` - to provide simple renaming methods (https://github.com/hparra/gulp-rename).