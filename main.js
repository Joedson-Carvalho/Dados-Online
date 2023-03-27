let bt_lancar = document.getElementById("bt");
let select = document.getElementById("tipo_dados");
let dado = document.getElementById("dado");

bt_lancar.addEventListener("click", () => {
    let result = Math.floor(Math.random() * select.value + 1);
    dado.textContent = result
})