// EXERCÍCIO 03
// Flexibilidade — Mesma Mestra, Comportamentos Diferentes 🔄
function operar(a, b, operacaoCallback) {
    return operacaoCallback(a, b);
}
function somar(x, y) {
    return x + y;
}
function multiplicar(x, y) {
    return x * y;
}
const resultadoSoma = operar(10, 4, somar);
const resultadoMultiplicacao = operar(10, 4, multiplicar);
console.log(`Resultado Soma: ${resultadoSoma}`);
console.log(`Resultado Multiplicação: ${resultadoMultiplicacao}`);