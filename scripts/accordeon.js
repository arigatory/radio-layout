const headers = document.getElementsByClassName("guests-accordion__header");
const contents = document.getElementsByClassName("guests-accordion__content");
const icons = document.getElementsByClassName("guests-accordion__icon");

for (let i = 0; i < headers.length; i++) {
      icons[i].src="../img/arrow-up.svg";
      contents[i].style.display = "none"
}

console.log(contents.length);
for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", () => {
    if (contents[i].style.display == "none") {
      icons[i].src="../img/arrow-down.svg";
      contents[i].style.display = "block"
    } else {
      icons[i].src="../img/arrow-up.svg";
      contents[i].style.display = "none"
    }
  });
}