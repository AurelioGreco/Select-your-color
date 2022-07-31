const inputColor = document.getElementById("inputColor");
const btnVisualizar = document.getElementById("btnVisualizar");
const parrafoExa = document.getElementById("parrafoExa");
const cardColor = document.getElementById("cardColor");
btnVisualizar.addEventListener("click", () => {
  parrafoExa.textContent = inputColor.value;
  document.getElementById("copy").textContent = "Color copied to the clipboard!";
  cardColor.style.backgroundColor = inputColor.value;
  navigator.clipboard
    .writeText(inputColor.value)
    .then(() => console.log("Color copied!"))
    .catch((e) => console.log(e));
});