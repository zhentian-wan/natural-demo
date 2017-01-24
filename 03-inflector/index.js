const N = require('natural');

var nounInflector = new N.NounInflector();
console.log(nounInflector.pluralize("mouse")); //mice
console.log(nounInflector.singularize("tomatoes")) //tomato

var countInflector = N.CountInflector;
for (var i = 0; i <= 10; i++) {
    console.log(countInflector.nth(i))
}
/*
1st
2nd
3rd
4th
5th
6th
7th
8th
9th
10th
* */