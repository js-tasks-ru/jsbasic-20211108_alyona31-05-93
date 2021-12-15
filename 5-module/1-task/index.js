function hideSelf() {
  document.querySelector("button, .hide-self-button").onclick = (event) => {
    event.target.hidden = true;
  };
}
