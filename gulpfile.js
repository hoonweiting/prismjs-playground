const { src, dest, series, parallel } = require('gulp');
const del = require('del');
const htmlmin = require('gulp-htmlmin');

const BUILD_DIR = 'build';
const DEPLOY_DIR = 'deploy';

function clean() {
  // Remove all files from DEPLOY_DIR except for .git
  return del([`${DEPLOY_DIR}/**/*`, `!${DEPLOY_DIR}/.git`]);
}

function minifyHtml() {
  // Minify HTML files
  return src(`${BUILD_DIR}/**/*.html`)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        keepClosingSlash: true
      })
    )
    .pipe(dest(`${DEPLOY_DIR}`));
}

function copyOtherFiles() {
  return src([`${BUILD_DIR}/**/*`, `!${BUILD_DIR}/**/*.html`])
    .pipe(dest(`${DEPLOY_DIR}`));
}

exports.deploy = series(clean, parallel(minifyHtml, copyOtherFiles));
