
function verify () {
  var pass = document.getElementById('passwordinp').value;
  if (pass == 'koi543') {
    window.open("/scanner/koipondcellars");
  }
   else if (pass =='bbc987') {
    window.open("scanner/burntbridgecellars");
  }
  else if (pass == 'jc765') {
    window.open("/scanner/jerusalemcafe");
  }
  else if (pass =='tommyos465') {
    window.open("/scanner/tommyos");
  };

};
