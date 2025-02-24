const INITIAL_FONT_SIZE = 256; // 初期フォントサイズ ※CSS側の値と合わせること

/**
 * フォントサイズをできるだけ大きくする
 * @param {HTMLElement} textElement テキスト要素
 */
const resizeText = (textElement) => {
  let fontSize = INITIAL_FONT_SIZE;
  textElement.style.fontSize = fontSize + "px";
  const condition = () => textElement.scrollWidth > window.innerWidth || textElement.scrollHeight > window.innerHeight;
  while (condition()) {
    fontSize -= 1;
    textElement.style.fontSize = fontSize + "px";
  }
};

const main = () => {
  // 要素取得
  const marquee = new URLSearchParams(window.location.search).get('marquee');
  const inputText = new URLSearchParams(window.location.search).get('text');
  const inputFontColor = new URLSearchParams(window.location.search).get('fontcolor');
  const inputBackgroundColor = new URLSearchParams(window.location.search).get('backgroundcolor');
  const textElement = document.querySelector(".resizable-text");
  // 初期化
  if (inputText) {
    textElement.textContent = inputText;
    document.title = `${inputText} - ${document.title}`;
  }
  if (inputFontColor) { textElement.style.color = inputFontColor; }
  if (inputBackgroundColor) { document.body.style.backgroundColor = inputBackgroundColor; }

  if (marquee === "true") {
    // マーキー表示
    textElement.classList.add("marquee-element");
    textElement.parentElement.classList.add("marquee-container")
  } else {
    // 1画面に収める
    resizeText(textElement);
    window.addEventListener("resize", () => resizeText(textElement)); // ウィンドウサイズ変更時に調整
    window.addEventListener("load", () => resizeText(textElement)); // ページ読み込み時に調整
  }
};

document.addEventListener("DOMContentLoaded", () => main());
