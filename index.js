#!/usr/bin/env node

var fs = require('fs');
var cheerio = require('cheerio');
var args = process.argv.splice(2)
//console.log('所传递的参数是：', args);
if(args.length == 0){
	console.error('use markdown2html some-markdwon.md > xxxx.html');
	process.exit(1);
}
var md_file = null;
try {
    md_file = fs.readFileSync(args[0], "utf-8");
} catch (err) {
	console.error(err);
	process.exit(1);
}

var showdown  = require('showdown');
	require('./showdown-prettify.js');
var markdownConverter = new showdown.Converter({extensions: ['prettify']});

markdownConverter.setOption('tables', true);
markdownConverter.setOption('simplifiedAutoLink', true);
markdownConverter.setOption('strikethrough', true);
markdownConverter.setOption('tablesHeaderId', true);
markdownConverter.setOption('tasklists', true);
markdownConverter.setOption('smoothLivePreview', true);
markdownConverter.setOption('smartIndentationFix', true);
markdownConverter.setOption('disableForced4SpacesIndentedSublists', true);
markdownConverter.setOption('simpleLineBreaks', true);
markdownConverter.setOption('openLinksInNewWindow', true);

markdownConverter.setOption('emoji', true);
markdownConverter.setOption('underline', true);
markdownConverter.setOption('metadata', true);
markdownConverter.setOption('splitAdjacentBlockquotes', true);
markdownConverter.setOption('customizedHeaderId', true);

markdownConverter.setOption('parseImgDimensions', true);
markdownConverter.setOption('headerLevelStart', 1);
markdownConverter.setOption('completeHTMLDocument', false);


var path = require('path');

var template_file = path.resolve(__dirname,'template.html');
var template = fs.readFileSync(template_file, "utf-8");
//console.log(template);
const $ = cheerio.load(template,{decodeEntities: false})
var html = markdownConverter.makeHtml(md_file);
$('#markdown-container').html(html);

//console.log($.html());

function writeToStdOut (html) {
    return process.stdout.write(html);
}

writeToStdOut($.html());



