var numlet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
btn = document.querySelector(".btn");
input = document.querySelector(".input");
passwordtext = document.querySelector(".password");
span = document.getElementById("span");

btn.addEventListener("click", function () {
  let password = "";
  const inputnum = parseInt(input.value);
  console.log(typeof inputnum);

  for (let index = 0; index < inputnum; index++) {
    password += numlet[random()];

    passwordtext.value = password;
  }

  if (inputnum <= 7) {
    passwordtext.value = "";
    span.innerText = "Input must be 8 characters above";
    span.classList.add("style");
  } else {
    span.innerText = "";
  }
});

function random() {
  return Math.floor(Math.random() * numlet.length);
}

function copy() {
  passwordtext.select();
  document.execCommand("copy");
}
