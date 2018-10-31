var myName = ["A","n","d","r","e", "s"];
var myMap = new Map()

myName.forEach(function(letter) {
	if (myMap.has(letter)) {
        myMap.set(letter, myMap.get(letter) + 1)
  } else {
    myMap.set(letter, 1)
  }
});

console.log(myMap);