StringColors
============

A node.js module for wrapping strings in color codes for pretty printing in BASH. Usage is very simple:

```js
var color = require('bash-colors');
console.log('Guess which word is ' + color.red('red') + ' when this is run?');
```

The 8 standard colors are explicitly supported as method names, and each takes a second argument which is a boolean (defaults to false) toggling hi-intensity.

```js
color.black('this text is black');
color.red('this text is high-intensity red', true);
color.green('this text is green');
color.yellow('this text is high-intensity yellow', true);
color.blue('this text is blue');
color.purple('this text is purple');
color.cyan('this text is cyan');
color.white('this text is white');
```

Additionally, the wrap() method allows you to pass in three arguments: your string, the color you want to use and a style value. Styles are enumerated as color.styles, and include bold, underline, background, high intensity text, high intensity bold text and high intensity background.

```js
color.wrap('this string will have a high-intensity blue background.', color.colors.BLUE, color.styles.hi_background);
color.wrap('this string will be red and underlined.', color.colors.RED, color.styles.underline);
```

Nesting things does NOT work. Bash codes can't nest this way - each color overwrites the previous, so you can't do one color over another. So this will fail:

```js
color.wrap(color.wrap('You might expect this text to be green on a high-intensity yellow background, but you'd be wrong.', color.colors.GREEN), color.colors.YELLOW, color.styles.hi_background);
```

Finally, all codes are exposed using the color.bash_codes property so if you wanted to wrap your own strings you could. For instance, this will work:
```js
var string = color.bash_codes.GREEN.text + "This text is green." + color.REMOVE_COLOR;
```
Just pay attention to that color.REMOVE_COLOR append - if you don't add that you may accidentally have all the rest of your console output colored until you do. The convenience methods all append that for you.