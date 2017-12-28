function encrypt() {
  var key = document.getElementById("keyValue").value;
  var keyArr = key.split("");
  var text = document.getElementById("text").value;
  var result = "";
  var counter = 0;

  for (var i = 0; i < text.length; ++i) {
    var c = text.charCodeAt(i);

    if (c === 32) { // Space added as it, counter reset
      counter = -1; // So that counter is incremented to 0 upon next iteration
      result += String.fromCharCode(c)
    } else if (c < 65 || c > 122) { // add other chars as is
      result += String.fromCharCode(c)
    } else if (c > 90 && c < 97) {
      result += String.fromCharCode(c)
    } else if (c >= 97 && (parseInt(c) + parseInt(keyArr[counter])) > 122) { // lowercase
      result += String.fromCharCode(parseInt(96) + parseInt((parseInt(c) + parseInt(keyArr[counter]) - parseInt(122))));
    } else if (c <= 90 && (parseInt(c) + parseInt(keyArr[counter])) > 90) { // uppercase 
      result += String.fromCharCode(parseInt(64) + parseInt((parseInt(c) + parseInt(keyArr[counter]) - parseInt(90))));
    } else { // basic rotator
      result += String.fromCharCode(parseInt(c) + parseInt(keyArr[counter]));
    }

    ++counter;

    if (counter === keyArr.length) {
      counter = 0;
    }
  }

  document.getElementById("text").value = result;
}

function decipher() {
  var key = document.getElementById("keyValue").value;
  var keyArr = key.split("");
  var text = document.getElementById("text").value;
  var result = "";
  var counter = 0;

  for (var i = 0; i < text.length; ++i) {
    var c = text.charCodeAt(i);

    if (c === 32) { // Space added as it, counter reset
      counter = -1; // So that counter is incremented to 0 upon next iteration
      result += String.fromCharCode(c)
    } else if (c >= 65 && c <= 90) { // uppercase
      if ((parseInt(c) - parseInt(keyArr[counter])) < 65) {
        result += String.fromCharCode(parseInt(91) - parseInt((parseInt(65) - (parseInt(c) - parseInt(keyArr[counter])))));
      }
      else {
        result += String.fromCharCode(parseInt(c) - parseInt(keyArr[counter]));
      }
    } else if (c >= 97 && c <= 122) { // lowercase
      if ((parseInt(c) - parseInt(keyArr[counter])) < 97) {
        result += String.fromCharCode(parseInt(123) - parseInt((parseInt(97) - (parseInt(c) - parseInt(keyArr[counter])))));
      }
      else {
        result += String.fromCharCode(parseInt(c) - parseInt(keyArr[counter]));
      }
    } else {
      result += String.fromCharCode(c);
    }

    ++counter;

    if (counter === keyArr.length) {
      counter = 0;
    }
  }

  document.getElementById("text").value = result;
}
