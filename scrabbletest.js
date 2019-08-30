var $ol = document.querySelector("ol");

function outputResult(message) {
  var $li = document.createElement("li");
  $li.innerText = message;
  $ol.appendChild($li);
  return $li;
}

function test(message, assertion) {
  var $msg = outputResult(message),
      passed = false;

  try {
    passed = assertion();
  }
  catch (e) {
    passed = false;
  }
  $msg.setAttribute("class", passed ? "pass" : "fail");
}

test("whitespace scores 0", function() {
  var whitespaceScore = new Scrabble('\t')
  return whitespaceScore.calculateScore() === 0;
});

test("very short word", function() {
  var shortWord = new Scrabble('a');
  return shortWord.calculateScore() === 1;
});

// _.first
test("simple word", function() {
  var simpleWord = new Scrabble('street');
  return simpleWord.calculateScore() === 6;
});


test("complicated word", function() {
  var complicatedWord = new Scrabble('quirky');
  return complicatedWord.calculateScore() === 22;
  });


test("case insensitive", function() {
  var caseInsensitive = new Scrabble('OXYPHENBUTAZONE');
  return caseInsensitive.calculateScore() === 41;
});
