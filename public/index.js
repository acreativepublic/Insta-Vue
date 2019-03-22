
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Instascan = require('instascan');

var app = new Vue({
  el: '#app',
  data: {
    scanner: null,
    activeCameraId: null,
    cameras: [],
    scans: []
  },
  mounted: function () {
    var self = this;
    self.scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5 });

var number=document.getElementById("myform");
    self.scanner.addListener('scan', function (content, image) {
      self.scans.unshift({ date: +(Date.now()), content: content });

      console.log(content);
    });
    Instascan.Camera.getCameras().then(function (cameras) {
      self.cameras = cameras;
      if (cameras.length > 0) {
        self.activeCameraId = cameras[0].id;
        self.scanner.start(cameras[0]);
      } else {
        console.error('No cameras found.');
      }
    }).catch(function (e) {
      console.error(e);
    });
  },
  methods: {

    formatName: function (name) {
      return name || '(unknown)';
    },
    selectCamera: function (camera) {
      this.activeCameraId = camera.id;
      this.scanner.start(camera);
    }
  }
});

function goback() {
  window.history.back();
}


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
