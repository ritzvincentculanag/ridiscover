const highlightText = document.querySelector(".highlight--text");
const words = ["Destinations", "People", "Culture", "Experience"];

highlightText.innerHTML = words[0];
let wordIndex = 0;
setInterval(() => {
  if (wordIndex >= words.length) {
    wordIndex = 0;
  }

  highlightText.innerHTML = words[wordIndex++];
}, 2000);
