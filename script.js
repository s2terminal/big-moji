const INITIAL_FONT_SIZE = 256; // 初期フォントサイズ

const resizeText = () => {
  const textElement = document.querySelector(".resizable-text");
  let fontSize = INITIAL_FONT_SIZE;
  textElement.style.fontSize = fontSize + "px";
  while (
    textElement.scrollWidth > window.innerWidth ||
    textElement.scrollHeight > window.innerHeight
  ) {
    fontSize -= 1;
    textElement.style.fontSize = fontSize + "px";
  }
}

document.addEventListener("DOMContentLoaded", (_) => {
  window.addEventListener("resize", resizeText); // ウィンドウサイズ変更時に調整
  window.addEventListener("load", resizeText); // ページ読み込み時に調整
});
