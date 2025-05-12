const apiUrl = "https://api.mymemory.translated.net/get";

const languages = {
    "uz": "Uzbek",
    "en": "English",
    "ru": "Russian",
    "fr": "French",
    "de": "German",
    "es": "Spanish",
    "zh": "Chinese",
    "ar": "Arabic",
    "hi": "Hindi",
    "pt": "Portuguese",
    "ja": "Japanese",
    "tr": "Turkish",
    "it": "Italian",
    "ko": "Korean",
    "fa": "Persian",
    "id": "Indonesian",
    "ms": "Malay",
    "bn": "Bengali",
    "vi": "Vietnamese",
    "th": "Thai",
    "pl": "Polish",
    "nl": "Dutch",
    "uk": "Ukrainian",
    "ro": "Romanian",
    "sv": "Swedish",
    "no": "Norwegian",
    "fi": "Finnish",
    "he": "Hebrew",
    "cs": "Czech",
    "hu": "Hungarian",
    "el": "Greek",
    "sr": "Serbian",
    "sk": "Slovak",
    "bg": "Bulgarian",
    "hr": "Croatian",
    "da": "Danish",
    "am": "Amharic",
    "ta": "Tamil",
    "te": "Telugu",
    "ml": "Malayalam",
    "kn": "Kannada",
    "sw": "Swahili",
    "ne": "Nepali",
    "si": "Sinhala",
    "my": "Burmese",
    "km": "Khmer",
    "lo": "Lao",
    "mn": "Mongolian"
  };
  
const language = {
    "en": "English",
    "uz": "Uzbek",
    "ru": "Russian",
    "fr": "French",
    "de": "German",
    "es": "Spanish",
    "zh": "Chinese",
    "ar": "Arabic",
    "hi": "Hindi",
    "pt": "Portuguese",
    "ja": "Japanese",
    "tr": "Turkish",
    "it": "Italian",
    "ko": "Korean",
    "fa": "Persian",
    "id": "Indonesian",
    "ms": "Malay",
    "bn": "Bengali",
    "vi": "Vietnamese",
    "th": "Thai",
    "pl": "Polish",
    "nl": "Dutch",
    "uk": "Ukrainian",
    "ro": "Romanian",
    "sv": "Swedish",
    "no": "Norwegian",
    "fi": "Finnish",
    "he": "Hebrew",
    "cs": "Czech",
    "hu": "Hungarian",
    "el": "Greek",
    "sr": "Serbian",
    "sk": "Slovak",
    "bg": "Bulgarian",
    "hr": "Croatian",
    "da": "Danish",
    "am": "Amharic",
    "ta": "Tamil",
    "te": "Telugu",
    "ml": "Malayalam",
    "kn": "Kannada",
    "sw": "Swahili",
    "ne": "Nepali",
    "si": "Sinhala",
    "my": "Burmese",
    "km": "Khmer",
    "lo": "Lao",
    "mn": "Mongolian"
  };
  
document.addEventListener("DOMContentLoaded", () => {
  const inputLang = document.getElementById("inputLang");
  const outputLang = document.getElementById("outputLang");

  Object.entries(languages).forEach(([code, name]) => {
    inputLang.innerHTML += `<option value="${code}">${name}</option>`;

  });
  Object.entries(language).forEach(([code, name]) => {
    outputLang.innerHTML += `<option value="${code}">${name}</option>`;
  });
});

document.getElementById("translateBtn").addEventListener("click", async () => {
  const text = document.getElementById("inputText").value;
  const fromLang = document.getElementById("inputLang").value;
  const toLang = document.getElementById("outputLang").value;

  if (!text) return;

  const response = await fetch(`${apiUrl}?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`);
  const data = await response.json();
  document.getElementById("outputText").value = data.responseData.translatedText;
});

document.querySelectorAll(".speak-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.getAttribute("data-target"));
    const lang = btn.closest(".translation-box").querySelector("select").value;
    const utterance = new SpeechSynthesisUtterance(target.value);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  });
});