var N = require('natural');

var word = "Dogs";
var word = "boxes";
var res = N.PorterStemmer.stem(word); // box / dog

var str = "I have tow dogs and also one cat living in two boxes";
var res = N.PorterStemmer.tokenizeAndStem(str); // [ 'tow', 'dog', 'on', 'cat', 'live', 'two', 'box' ]


console.log(res);