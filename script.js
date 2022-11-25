const cidades = {
  "Parana": ["Curitiba", "Cascavel", "Maringá"],
  "Santa Catarina": ["Florianópolis", "Blumenau", "Lages"],
  "Rio Grande do Sul": ["Porto Alegre", "Gramado", "Caxias do Sul"]
}

const opt = document.querySelector("[data-js='opts']")
const cidadeContainer = document.querySelector("[data-js='showCidades']")
console.log("🚀 => opt", opt)

opt.addEventListener("change", event => {
  cidadeContainer.innerHTML = ""
  const selectedValue = event.target.selectedOptions[0].value
  if(!selectedValue) {
    cidadeContainer.setAttribute("disabled", "true")
    return
  }
  cidadeContainer.removeAttribute("disabled")
  cidades[selectedValue].forEach((cidade) => {
    return cidadeContainer.innerHTML += `<option>${cidade}</option>`
  })  
})