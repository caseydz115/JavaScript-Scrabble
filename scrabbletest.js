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
  var whitespaceScore = Object.create(Scrabble);
  return whitespaceScore.calculateScore('\t') === 0;
});

test("very short word", function() {
  var shortWord = Object.create(Scrabble);
  return shortWord.calculateScore('a') === 1;
});

// _.first
test("simple word", function() {
  var simpleWord = Object.create(Scrabble);
  return simpleWord.calculateScore('street') === 6;
});


test("complicated word", function() {
  var complicatedWord = Object.create(Scrabble);
  return complicatedWord.calculateScore('quirky') === 22;
  });


test("case insensitive", function() {
  var caseInsensitive = Object.create(Scrabble);
  return caseInsensitive.calculateScore('OXYPHENBUTAZONE') === 41;
});
