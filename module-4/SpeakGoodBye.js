(function (window) {
  var byeSpeaker = new Object();
  byeSpeaker.speak(window);

  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
