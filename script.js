
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var i = 0; i < 10; i++)
{
  var l = names[i][0].toLowerCase();
  if(l === "j"){
    SpeakHello.speak(names[i]);
  } else{
    SpeakGoodBye.speak(names[i]);
  }
}