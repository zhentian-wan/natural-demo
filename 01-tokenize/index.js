const N = require('natural');


const str = "I am happy! I don't need to cook today!";

var token = new N.WordTokenizer(); //  'I', 'am', 'happy', 'I', 'don', 't', 'need', 'to', 'cook', 'today' ]
var res = token.tokenize(str);

var token = new N.TreebankWordTokenizer();
var res = token.tokenize(str);
/*
* [ 'I',
  'am',
  'happy',
  '!',
  'I',
  'do',
  'n\'t',
  'need',
  'to',
  'cook',
  'today',
  '!' ]
* */

var token = new N.WordPunctTokenizer();
var res = token.tokenize(str);
/*
*[ 'I',
  'am',
  'happy',
  '!',
  'I',
  'don',
  '\'',
  't',
  'need',
  'to',
  'cook',
  'today',
  '!' ]
* */






console.log(res);
