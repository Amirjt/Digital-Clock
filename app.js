const hour = document.querySelector(".hour");
const mins = document.querySelector(".mins");
const sec = document.querySelector(".sec");

function timeGetter() {
  const time = new Date();
  hour.innerHTML = time.getHours();
  const paddedMis = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  mins.innerHTML = paddedMis;
  const paddedSeconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  sec.innerHTML = paddedSeconds;
}

timeGetter();

setInterval(timeGetter, 1000);
