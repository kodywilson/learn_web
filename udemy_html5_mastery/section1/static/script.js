function speak() {
  var voice = new SpeechSynthesisUtterance();
  voice.text = "Scooby dooby doo!";
  speechSynthesis.speak(voice);
}