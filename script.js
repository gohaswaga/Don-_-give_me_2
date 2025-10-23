document.getElementById("check-button").addEventListener("click", () => {
  const color = document.getElementById("color").value;
  const result = document.getElementById("result");
  const title = document.getElementById("mood-title");
  const description = document.getElementById("mood-description");

  function hexToRgb(hex) {
    hex = hex.replace("#", "");
    if (hex.length === 8) hex = hex.slice(0, 6); 
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return { r, g, b };
  }

  function getBrightness({ r, g, b }) {
    return (r * 299 + g * 587 + b * 114) / 1000;
  }

  function getMood(color) {
    const rgb = hexToRgb(color);
    const brightness = getBrightness(rgb);
    let mood, moodText;

    if (brightness < 50) {
      mood = "Ночной эстет";
      moodText = "Ты выбрал тёмный цвет — любишь глубину и выразительность";
    } else if (brightness > 200) {
      mood = "Энергичный эстет";
      moodText = "Яркий цвет — ты владелец яркого мышления";
    } else {
      mood = "Эстет гармонии";
      moodText = "Нежный оттенок — ты склонен к чувствам и тонким переживаниям";
    }

    return { mood, moodText };
  }

  const moodResult = getMood(color);
  const mood = moodResult.mood;
  const moodText = moodResult.moodText;

  document.body.style.backgroundColor = color;
  title.textContent = mood;
  description.textContent = moodText;
  result.classList.remove("hidden");
});

