var bash_codes = exports.bash_codes = {
	"BLACK" : {
		"text" : "\x1b[0;30m",
		"underline": "\x1b[4;30m",
		"background": "\x1b[40m",
		"bold":"\x1b[1;30m",
		"hi_text":"\x1b[0;90m",
		"hi_bold" : "\x1b[1;90m",
		"hi_background" : "\x1b[0;100m"
	},
	"RED" : {
		"text" : "\x1b[0;31m",
		"bold":"\x1b[1;31m",
		"underline": "\x1b[4;31m",
		"background": "\x1b[41m",
		"hi_text":"\x1b[0;91m",
		"hi_bold" : "\x1b[1;91m",
		"hi_background" : "\x1b[0;101m"
	},
	"GREEN" : {
		"text" : "\x1b[0;32m",
		"bold":"\x1b[1;32m",
		"underline": "\x1b[4;32m",
		"background": "\x1b[42m",
		"hi_text":"\x1b[0;92m",
		"hi_bold" : "\x1b[1;92m",
		"hi_background" : "\x1b[0;102m"
	},
	"YELLOW" : {
		"text" : "\x1b[0;33m",
		"bold":"\x1b[1;33m",
		"underline": "\x1b[4;33m",
		"background": "\x1b[43m",
		"hi_text":"\x1b[0;93m",
		"hi_bold" : "\x1b[1;93m",
		"hi_background" : "\x1b[0;103m"
	},
	"BLUE" : {
		"text" : "\x1b[0;34m",
		"bold":"\x1b[1;34m",
		"underline": "\x1b[4;34m",
		"background": "\x1b[44m",
		"hi_text":"\x1b[0;94m",
		"hi_bold" : "\x1b[1;94m",
		"hi_background" : "\x1b[0;104m"
	},
	"PURPLE" : {
		"text" : "\x1b[0;35m",
		"bold":"\x1b[1;35m",
		"underline": "\x1b[4;35m",
		"background": "\x1b[45m",
		"hi_text":"\x1b[0;95m",
		"hi_bold" : "\x1b[1;95m",
		"hi_background" : "\x1b[0;105m"
	},
	"CYAN" : {
		"text" : "\x1b[0;36m",
		"bold":"\x1b[1;36m",
		"underline": "\x1b[4;36m",
		"background": "\x1b[46m",
		"hi_text":"\x1b[0;96m",
		"hi_bold" : "\x1b[1;96m",
		"hi_background" : "\x1b[0;106m"
	},
	"WHITE" : {
		"text" : "\x1b[0;37m",
		"bold":"\x1b[1;37m",
		"underline": "\x1b[4;37m",
		"background": "\x1b[47m",
		"hi_text":"\x1b[0;97m",
		"hi_bold" : "\x1b[1;97m",
		"hi_background" : "\x1b[0;107m"
	}
};

exports.colors = {
	BLACK: "BLACK",
	RED: "RED",
	GREEN: "GREEN",
	YELLOW: "YELLOW",
	BLUE: "BLUE",
	PURPLE: "PURPLE",
	CYAN: "CYAN",
	WHITE: "WHITE"
};

var styles = exports.styles = {
	bold: "bold",
	underline: "underline",
	background: "background",
	hi_text: "hi_text",
	hi_bold: "hi_bold",
	hi_background: "hi_background"
};

var REMOVE_COLOR = exports.REMOVE_COLOR = "\x1b[0m";


// various logical inconsistencies in the code below - renderColor and wrap seem like they should be combined, but I'm letting wrap basically stand on its own
// in case anyone wants access to explicitly handle background or underline stuff. I feel like those are a bit more special-casey, and generally speakign
// users are going to want to quickly turn a word or phrase into a single color without worrying about background or underline. So the .colorName methods
// are just syntactic sugar.
exports.wrap = function(str, color, style) {
	var c = bash_codes[color.toUpperCase()];
	var s = styles[style] || "text";
	
	return render(c[s], str);
};

exports.black = function(str, hi) {
	return renderColor(str, bash_codes.BLACK, hi);
};

exports.red = function(str, hi) {
	return renderColor(str, bash_codes.RED, hi);
};

exports.green = function(str, hi) {
	return renderColor(str, bash_codes.GREEN, hi);
};

exports.yellow = function(str, hi) {
	return renderColor(str, bash_codes.YELLOW, hi);
};

exports.blue = function(str, hi) {
	return renderColor(str, bash_codes.BLUE, hi);
};

exports.purple = function(str, hi) {
	return renderColor(str, bash_codes.PURPLE, hi);
};

exports.cyan = function(str, hi) {
	return renderColor(str, bash_codes.CYAN, hi);
};

exports.white = function(str, hi) {
	return renderColor(str, bash_codes.WHITE, hi);
};


function renderColor(str, color, hi) {
	return render(hi ? color.hi_text : color.text, str);
}

function render(code, str) {
	return code + str + REMOVE_COLOR;
}
