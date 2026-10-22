// EXERCÍCIO 04
// Simplificando com Arrow Functions Inline ⚡
function processarTexto(texto, callbackModificadora) {
    callbackModificadora(texto);
}
processarTexto("senai valinhos", (texto) => {
    console.log(texto.toUpperCase());
})