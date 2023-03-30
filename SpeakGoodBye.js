(function SpeakGoodBye (window) {
    var SpeakGoodBye  = {};
    var speakWord = "Good Bye";

    SpeakGoodBye.speak =  function (name) {
        console.log(speakWord + " " + name);
    } 

    window.SpeakGoodBye  = SpeakGoodBye;

})(window);
