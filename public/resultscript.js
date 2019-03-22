


function rest() {


  var cap = localStorage.getItem('key1');


console.log(cap);


  if ( document.getElementById("getcode") == null) {

    var d = new Date();
    document.getElementById("cdate").value = d;


    document.getElementById("qrin").value = cap;

    document.getElementById("myform2").submit();
    document.getElementById("results").innerHTML = "code added to database";
    console.log(cap);
    console.log('added todb');
  } else {
var hep = document.getElementById("getcode").value;
console.log(hep);
};


};
rest();
console.log('this from resscript');
console.log(document.getElementById("getcode").value);
