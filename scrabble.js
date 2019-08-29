var scores = {
  aeioulnrst: 1,
  dg: 2,
  bcmp:3,
  fhvwy: 4,
  k: 5,
  jx: 8,
  qz: 10
}

var Scrabble = {
  calculateScore: function(word) {
    var result = 0;
    var lowerCase = word.toLowerCase();
    for (var i = 0; i < word.length; i++) {
      for (letters in scores) {
        var arr = letters.split('');
        if (arr.indexOf(lowerCase[i]) !== -1) {
          result += scores[letters];
          break;
        }
     }
    }
    return result;
  }
}