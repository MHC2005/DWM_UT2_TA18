const personas = ["Mateo", "Matias", "Marta", "Anakin", "Ana"];
const lista = document.getElementById("listapersonas");

// renderiza la lista completa
function renderLista(filtro = "") {
    lista.innerHTML = personas
        .filter(persona => persona.toLowerCase().includes(filtro.toLowerCase()))
        .map(persona => `<li>${persona}</li>`)
        .join('');
}

// filtra a medida que el usuario escribe
document.getElementById("buscador").addEventListener("input", (e) => {
    renderLista(e.target.value);
});

// al principio muestra toda la lista
renderLista();
