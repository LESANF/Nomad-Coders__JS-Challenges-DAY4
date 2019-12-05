// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");
body.style.backgroundColor = "#9b59b6";

function handleResize() {
  const WIDTH = window.innerWidth;
  if (WIDTH >= 1000) {
    body.style.backgroundColor = "#EEBC12";
  } else if (700 < WIDTH && WIDTH < 1000) {
    body.style.backgroundColor = "#9b59b6";
  } else {
    body.style.backgroundColor = "#2D8ED6";
  }
}

window.addEventListener("resize", handleResize);
