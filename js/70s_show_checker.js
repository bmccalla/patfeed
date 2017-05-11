function checkIt() {
  // Initialize scores
  var eric = 0;
  var jackie = 0;
  var kelso = 0;
  var hyde = 0;
  var fez = 0;
  var kitty = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');
 

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'eric') {
        eric++;
      }
      else if (e.value == 'jackie') {
        jackie++;
      }
      else if (e.value == 'kelso') {
        kelso++;
      }
      else if (e.value == 'hyde') {
        hyde++;
      }
      else if (e.value == 'fez') {
        fez++;
      }
      else if (e.value == 'kitty') {
        kitty++;
      }
    }

  }

  // Determine result
  var counts = "Eric: " + eric + ", " +
               "Jackie: " + jackie  + ", " +
               "Kelso: " + kelso + ", " +
               "Hyde: " + hyde  + ", " +
               "Fez: " + fez  + ", " +
               "Kitty: " + kitty

  // What is the highest value?
  var max = Math.max(eric, jackie, kelso, hyde, fez, kitty);

  // Form a message
  var message;

  if (max == eric) {
    message = "No one cares about star wars! You are Eric Forman.";
  }
  else if (max == jackie) {
    message = "We all know the only person you love is yourself. You are Jackie Burkhart. ";
  }
  else if (max == kelso) {
    message = "You are like ketchup, you go good on anything. You are Michael Kelso";
  }
  else if (max == hyde) {
    message = "You don’t love people, you love Zeppelin , Camaros, and french fries in that order";
  }
  else if (max == fez) {
    message = "You need to keep your needs to yourself.";
  }
  else if (max == kitty) {
    message = "You are the best tv mom that has ever lived. ";
  }



  // Display result
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result').innerHTML = message;


}
