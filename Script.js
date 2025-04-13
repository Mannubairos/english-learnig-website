const words = [
  { word: "Hello", meaning: "नमस्ते" },
  { word: "Thank you", meaning: "धन्यवाद" },
  { word: "Sorry", meaning: "माफ़ कीजिए" },
  { word: "Please", meaning: "कृपया" },
  { word: "Come", meaning: "आओ" },
  { word: "Go", meaning: "जाओ" },
  // Aise hi aur add karte jao
];

const listDiv = document.getElementById("word-list");

words.forEach(item => {
  const div = document.createElement("div");
  div.className = "word-item";
  div.innerHTML = `<div class="word">${item.word}</div><div class="meaning">${item.meaning}</div>`;
  listDiv.appendChild(div);
});