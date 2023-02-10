const wordToSearch = document.getElementById("wordToSearch");
const textBox = document.getElementById("textBox");
const textBoxContent = textBox.textContent;

wordToSearch.addEventListener("keyup", () => {
  textBox.textContent = textBoxContent;
  if (wordToSearch.value != "") {
    textBox.innerHTML = textBoxContent.replaceAll(
      wordToSearch.value,
      `<mark>${wordToSearch.value}</mark>`
    );
  }
});
