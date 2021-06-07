time = document.querySelector(".time");
main = document.querySelector(".main");
country = document.querySelector(".country");
call = document.querySelector(".call");
btn = document.querySelector(".btn");
textname = document.querySelector(".textname");
message = document.querySelector(".message-text");

function getDate() {
  let date = new Date(),
    hour = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  hour = hour % 12 || 12;

  time.innerHTML = `${hour} <span>:</span> ${zero(
    minutes
  )} <span>:</span> ${zero(seconds)}`;
  country.innerHTML = "Philippine Time";

  setTimeout(getDate, 1000);
}
function zero(m) {
  return (parseInt(m) < 10 ? "0" : "") + m;
}
function setImage() {
  let date = new Date(),
    hour = date.getHours();
  if (hour < 12) {
    document.body.style.backgroundImage = "url('./styles/morning.jpg')";
    message.textContent =
      "The best preparation for tomorrow is doing your best today";
    message.style.color = "black";
  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('./styles/afternoon.jpg')";
    message.textContent =
      "The afternoon knows what the morning never suspected";
  } else {
    document.body.style.backgroundImage = "url('./styles/night2.jpg')";
    message.textContent =
      "Those who dream by day are cognizant of many things which escape those who dream only by night";
  }
}

btn.addEventListener("click", function () {
  const name = call.value;

  localStorage.setItem("name", name);
  location.reload();

  name.value = "";
});
for (let index = 0; index < localStorage.length; index++) {
  const key = localStorage.key(index);
  const value = localStorage.getItem(key);

  const text = document.createElement("h2");
  text.appendChild(document.createTextNode(`Welcome ${value}`));
  textname.appendChild(text);
  textname.style.color = "white";
}

setImage();
getDate();
