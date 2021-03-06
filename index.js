#!/usr/bin/env node


//正则表达式替换
var templateEngine = function(tpl , data) {
    var re = /<%=([^%<>]+)=%>/g;
    while (match = re.exec(tpl)) {
        //console.log( match );
        tpl = tpl.replace( match[0] , data[match[1]] );
    }
   return tpl;
}

function writeToStdOut (html) {
    return process.stdout.write(html);
}

var fs = require('fs');
//var cheerio = require('cheerio');
var args = process.argv.splice(2);
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

	require('./lib/showdown-prettify.js');
var showdown  = require('./lib/showdown.js');
	
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

markdownConverter.setOption('splitAdjacentBlockquotes', true);
markdownConverter.setOption('customizedHeaderId', true);

markdownConverter.setOption('parseImgDimensions', true);
markdownConverter.setOption('headerLevelStart', 1);

markdownConverter.setOption('metadata', true);
markdownConverter.setOption('completeHTMLDocument', false);


var path = require('path');

var template_file = path.resolve(__dirname,'template2.html');
var template = fs.readFileSync(template_file, "utf-8");

//console.log(template);
//const $ = cheerio.load(template,{decodeEntities: false})

var html = markdownConverter.makeHtml(md_file);

//$('#markdown-container').html(html);
//console.log($.html());



var data = {
    markdown_content : html
};  

//writeToStdOut($.html());
writeToStdOut(templateEngine(template,data));




