const INITIAL_FONT_SIZE = 256; // 初期フォントサイズ

/**
 * フォントサイズをできるだけ大きくする
 * @param {HTMLElement} textElement テキスト要素
 */
const resizeText = (textElement) => {
  let fontSize = INITIAL_FONT_SIZE;
  textElement.style.fontSize = fontSize + "px";
  while (
    textElement.scrollWidth > window.innerWidth ||
    textElement.scrollHeight > window.innerHeight
  ) {
    fontSize -= 1;
    textElement.style.fontSize = fontSize + "px";
  }
};

const main = () => {
  const inputText = new URLSearchParams(window.location.search).get('text');
  const textElement = document.querySelector(".resizable-text");
  if (inputText) {
    textElement.textContent = inputText;
  }

  resizeText(textElement);
  window.addEventListener("resize", () => resizeText(textElement)); // ウィンドウサイズ変更時に調整
  window.addEventListener("load", () => resizeText(textElement)); // ページ読み込み時に調整
};

document.addEventListener("DOMContentLoaded", () => main());
