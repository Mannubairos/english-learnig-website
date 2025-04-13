const sentences = [
  { english: "How are you?", hindi: "आप कैसे हैं?" },
  { english: "I am fine, thank you.", hindi: "मैं ठीक हूँ, धन्यवाद।" },
  { english: "What is your name?", hindi: "आपका नाम क्या है?" },
  { english: "My name is Rahul.", hindi: "मेरा नाम राहुल है।" },
  { english: "Where are you going?", hindi: "आप कहाँ जा रहे हैं?" },
  { english: "I am going to school.", hindi: "मैं स्कूल जा रहा हूँ।" },
  { english: "Please help me.", hindi: "कृपया मेरी मदद करें।" },
  { english: "I don't understand.", hindi: "मुझे समझ नहीं आया।" },
  { english: "What time is it?", hindi: "अभी क्या समय हुआ है?" },
  { english: "I am hungry.", hindi: "मुझे भूख लगी है।" },
  // और भी जोड़ सकते हैं...
];

const container = document.getElementById("sentences");

sentences.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "sentence";
  div.innerHTML = `
    <div class="english">${index + 1}. ${item.english}</div>
    <div class="hindi">${item.hindi}</div>
  `;
  container.appendChild(div);
});