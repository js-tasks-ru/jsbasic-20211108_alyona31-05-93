function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
      let cell = row.cells[j];
      let header = table.rows[0].cells[j].innerText;

      switch (header) {
      case "Status":
        let isAvailable = cell.getAttribute("data-available");
        if (!isAvailable) {
          row.hidden = true;
        } else {
          if (isAvailable === "true") {
            row.classList.add("available");
          } else if (isAvailable === "false") {
            row.classList.add("unavailable");
          }
        }
        break;
      case "Gender":
        let gender = cell.innerText;
        if (gender === "m") {
          row.classList.add("male");
        } else if (gender === "f") {
          row.classList.add("female");
        }
        break;
      case "Age":
        if (cell.innerText < 18) {
          row.style.textDecoration = "line-through";
        }
        break;
      }
    }
  }
}
