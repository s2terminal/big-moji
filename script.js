const INITIAL_FONT_SIZE = 1024; // 初期フォントサイズ ※CSS側の値と合わせること

/**
 * フォントサイズをできるだけ大きくする
 * @param {HTMLElement} textElement テキスト要素
 * @param {boolean} marquee マーキー表示かどうか
 */
const resizeText = (textElement, marquee) => {
  let fontSize = INITIAL_FONT_SIZE;
  textElement.style.fontSize = fontSize + "px";
  const condition = () => {
    if (marquee) {
      return textElement.offsetHeight > window.innerHeight;
    }
    return textElement.scrollHeight > window.innerHeight || textElement.scrollWidth > window.innerWidth;
  };
  while (condition()) {
    if (fontSize <= 32) break;
    fontSize -= 1;
    textElement.style.fontSize = fontSize + "px";
  }
};

const main = () => {
  // 要素取得
  const marquee = new URLSearchParams(window.location.search).get('marquee') === "true";
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

  if (marquee) {
    // マーキー表示
    textElement.classList.add("marquee-element");
    textElement.parentElement.classList.add("marquee-container")
  }
  // 1画面に収める
  resizeText(textElement, marquee);
  window.addEventListener("resize", () => resizeText(textElement, marquee)); // ウィンドウサイズ変更時に調整
  window.addEventListener("load", () => resizeText(textElement, marquee)); // ページ読み込み時に調整
};

document.addEventListener("DOMContentLoaded", () => main());
