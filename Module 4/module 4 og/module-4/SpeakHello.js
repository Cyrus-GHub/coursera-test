(function (window) {
  var helloSpeaker = new Object();
  helloSpeaker.speak = "";

  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
