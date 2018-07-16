console.log("Hmmmm")
var AmEx = "348167334351986";
var dis1 = "6011454538701544";
var dis2 = "6521454538701544";

var arr1 = ['cat', 'dog', 'frog', 'giraffe', 7, 'bar'];
var arr2 = ['cherry', 'pineapple', 'banana', 'bar', 7];
var arr3 = ['lemon', 'cherry', 'banana', 'giraffe', 7, 'bar'];
var word = "potato";

// Challenge 1

var count = 0;
var re = new RegExp('[aeiouAEIOU]');
var challenge1 = function(word) {
  var newWord = word;
  for (var i = 0; i < word.length; i++) {
    word = word.replace(re, count++);
  }
  return word;
}

//Challenge 2

// Character Histogram: Write a function that takes a string as input, and generates a count of each distinct letter in it. Write another function to get a string from the user, call the first function, and print the results to the console.
//
// Optional: The results should be in order from the most common letter to the least; letters with the same frequency should be in Unicode order. Given "Hello, world!", the output should look like:
var challenge2 = function(word) {
  var lettersArr = {};
  for (var i = 0; i < word.length; i++) {
    var letter = word.charAt(i);
    if (lettersArr[letter]) {
      lettersArr[letter]++;
    } else {
      lettersArr[letter] = 1;
    }
  }

  // lettersArr.sort(function(a,b){
  //   return b.letter - a.letter;
  // });
  return lettersArr;
};




//Challenge 3
var challenge3 = function(word) {
  var seperator = " ";
  var splitPhrase = word.split(seperator);
  console.log(splitPhrase.length);
  return splitPhrase.length;
}

//Challenge4
var challenge4 = function() {
  var newArr = [];
  for (var i = 0; i < arguments.length; i++) {
    var arrLength = arguments[i].length;
    var randomNum = Math.floor((Math.random() * arrLength))
    newArr.push(arguments[i][randomNum]);
  }
  return newArr;
}

//Challenge5

var challenge5 = function(ccNum) {
  var masReg = new RegExp('5[12345]');
  //6011, 622126-622925, 644, 645, 646, 647, 648, 649, 65
  var disReg = new RegExp('65?4?[456789]')

  if (ccNum.length === 15 && (ccNum.startsWith("34") || ccNum.startsWith("37"))) {
    return "AmEx";
  } else if (ccNum.length >= 13 && ccNum.length <= 16 && ccNum.startsWith("4")) {
    return "Visa";
  } else if (ccNum.substr(0, 2).match(masReg) && (ccNum.length >= 16 && ccNum.length <= 19)) {
    return "MasterCard";
  } else if (ccNum.length === 16 && (ccNum.startsWith("6011") || ccNum.startsWith(622126 - 622925) || ccNum.match(disReg))) {
    return "Discover";
  } else {
    return "Credit Card match not found";
  }
}

//Challenge6
// Random Sentence Generator: Write a program that has lists of nouns, verbs, adjectives, and other parts of speech.It will also have a list of sentence structures like "article noun verb", "adjective noun adverb verb" (these could arrays, strings, or any other kind of structure).When run, the program randomly chooses a sentence structure and randomly assigns words: "angry giraffe quietly raps", "the grapefruit sings".

var nouns = ['dog', 'cat', 'person', 'beaver'];
var verbs = ['ran', 'ate', 'killed'];
var articles = ['the', 'a', 'an'];
var adjectives = ['heavy', 'slow', 'fast', 'stoned'];
var struc1 = "article noun verb article adjective noun";
var challenge6 = function(structure) {
  var sentenceStructure = structure.split(" ");
  var randomSentence = "";
  for (var i = 0; i < sentenceStructure.length; i++) {
    switch (sentenceStructure[i]) {
      case 'noun':
        randomSentence += " " + nouns[Math.floor((Math.random() * nouns.length))];
        break;
      case 'verb':
        randomSentence += " " + verbs[Math.floor((Math.random() * verbs.length))];
        break;
      case 'article':
        randomSentence +=" " +  articles[Math.floor((Math.random() * articles.length))];
        break;
      case 'adjective':
        randomSentence += " " + adjectives[Math.floor((Math.random() * adjectives.length))];
        break;
    }
  }
  return randomSentence;
}
