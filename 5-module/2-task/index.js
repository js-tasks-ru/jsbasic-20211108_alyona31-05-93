function toggleText() {
  document.querySelector("button, .toggle-text-button").onclick = () => {
    let text = document.getElementById("text");
    text.hidden = !text.hidden;
  };
}
