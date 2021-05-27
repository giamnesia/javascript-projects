const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let hex = "#";
  for (let index = 0; index < 6; index++) {
    hex += hexColors[randomNum()];
  }
  document.getElementById("text").value = hex;
  document.body.style.backgroundColor = hex;
  document.execCommand("copy");
  document.getElementById("span").innerText = " ";
});

function randomNum() {
  return Math.floor(Math.random() * hexColors.length);
}

function copyText() {
  const copy = document.getElementById("text");
  copy.select();
  document.execCommand("copy");
  document.getElementById("span").innerText = "Copied to Clipboard";
}
