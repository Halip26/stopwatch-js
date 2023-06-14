// initialize all variables
let milli_seconds = 0;
seconds = 0;
minutes = 0;
let h2 = document.getElementById("time");

(start = document.getElementById("button-start")),
  (stop = document.getElementById("button-stop")),
  (clear = document.getElementById("button-reset"));

let interval = 1;

// membuat fungsi count()
function count() {
  interval = 1;
  milli_seconds += interval;

  if (milli_seconds >= 100) {
    milli_seconds = 0;
    seconds += interval;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes += interval;
  }

  h2.textContent =
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    " : " +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    " : " +
    (milli_seconds > 9 ? milli_seconds : "0" + milli_seconds);

  timer();
}

// membuat fungsi timer
function timer() {
  t = setTimeout(count, 10);
}

/* Start button */
start.onclick = count;

/* Stop button */
stop.onclick = function () {
  clearTimeout(t);
};

/* Clear button */
clear.onclick = function () {
  h2.textContent = "00 : 00 : 00";
  seconds = 0;
  minutes = 0;
  milli_seconds = 0;
  interval = 0;
};