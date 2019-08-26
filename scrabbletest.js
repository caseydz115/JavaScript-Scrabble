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
  return scrabble('\t') === 0;
});

test("very short word", function() {
  return scrabble('a') === 1;
});

// _.first
test("simple word", function() {
  return scrabble('street') === 6;
});


test("complicated word", function() {
  return scrabble('quirky') === 22;
  });


test("case insensitive", function() {
  return scrabble('OXYPHENBUTAZONE') === 41;
});
