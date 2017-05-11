function checkIt() {
  // Initialize scores
  var sagittarius = 0;
  var leo = 0;
  var capricorn = 0;
  var tarius = 0;
  var gemini = 0;
  var cancer = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'sagittarius') {
        sagittarius++;
      }
      else if (e.value == 'leo') {
        leo++;
      }
      else if (e.value == 'capricorn') {
        capricorn++;
      }
      else if (e.value == 'tarius') {
        tarius++;
      }
      else if (e.value == 'gemini') {
        gemini++;
      }
      else if (e.value == 'cancer') {
        cancer++;
      }
    }

  }

  // Determine result
  var counts = "Sagittarius: " + sagittarius + ", " +
               "Leo: " + leo  + ", " +
               "Capricorn: " + capricorn + ", " +
               "Tarius: " + tarius  + ", " +
               "Gemini: " + gemini  + ", " +
               "Cancer: " + cancer

  // What is the highest value?
  var max = Math.max(sagittarius, leo, capricorn, tarius, gemini, cancer);

  // Form a message
  var message;

  if (max == sagittarius) {
    message = " You are a sagittarius ";
  }
  else if (max == leo) {
    message = "You are a leo. ";
  }
  else if (max == capricorn) {
    message = "You are a capricorn. ";
  }
  else if (max == tarius) {
    message = "You are a tarius. ";
  }
  else if (max == gemini) {
    message = "You are a gemini. ";
  }
  else if (max == cancer) {
    message = "You are a cancer. ";
  }

  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result').innerHTML = message;
  document.getElementById('result-title').innerHTML = message;
  document.getElementById('result-heading').innerHTML = message;
  document.getElementById('result-text').innerHTML = message;
}
