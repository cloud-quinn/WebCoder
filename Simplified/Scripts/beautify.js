/**
The following batches are equivalent:

var beautify_js = require('js-beautify');
var beautify_js = require('js-beautify').js;
var beautify_js = require('js-beautify').js_beautify;

var beautify_css = require('js-beautify').css;
var beautify_css = require('js-beautify').css_beautify;

var beautify_html = require('js-beautify').html;
var beautify_html = require('js-beautify').html_beautify;

All methods returned accept two arguments, the source string and an options object.
**/

function get_beautify(js_beautify, css_beautify, html_beautify) {
    // the default is js
    var beautify = function (src, config) {
        return js_beautify.js_beautify(src, config);
    };

    // short aliases
    beautify.js   = js_beautify.js_beautify;
    beautify.css  = css_beautify.css_beautify;
    beautify.html = html_beautify.html_beautify;

    // legacy aliases
    beautify.js_beautify   = js_beautify.js_beautify;
    beautify.css_beautify  = css_beautify.css_beautify;
    beautify.html_beautify = html_beautify.html_beautify;

    return beautify;
}

if (typeof define === "function" && define.amd) {
    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
    define([
        "./lib/beautify",
        "./lib/beautify-css",
        "./lib/beautify-html"
    ], function(js_beautify, css_beautify, html_beautify) {
        return get_beautify(js_beautify, css_beautify, html_beautify);
    });
} else {
    (function(mod) {
        var js_beautify = require('./lib/beautify');
        var css_beautify = require('./lib/beautify-css');
        var html_beautify = require('./lib/beautify-html');

        mod.exports = get_beautify(js_beautify, css_beautify, html_beautify);

    })(module);
}

var textArea = $('#htmlCode')[0];

if (the.use_codemirror && typeof CodeMirror !== 'undefined') {
    the.editor = CodeMirror.fromTextArea(textArea, {
        theme: 'default',
        lineNumbers: true
    });
    the.editor.focus(); 

    the.editor.setValue(default_text);
    $('.CodeMirror').click(function () {
        if (the.editor.getValue() == default_text) {
            the.editor.setValue('');
        }
    });
    } else {
        $('#htmlCode').val(default_text).bind('click focus', function () {
            if ($(this).val() == default_text) {
                $(this).val('');
            }
        }).bind('blur', function () {
            if (!$(this).val()) {
                $(this).val(default_text);
            }
        });
}

    $(window).bind('keydown', function (e) {
        if (e.ctrlKey && e.keyCode == 13) {
            beautify();
        }
    })
    $('.submit').click(beautify);
    $('select').change(beautify);

});
