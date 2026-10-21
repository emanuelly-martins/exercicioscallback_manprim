function bhaskara (a, b, c, callbackDividir) {
    const delta = Math.sqrt (b ** 2 - 4 * a * c);
    const x1 = b * (-1) + delta;
    const x2 = b * (-1) - delta;
    const totalX1 = callbackDividir(x1, (2 * a));
    const totalX2 = callbackDividir(x2, (2 * a));
    return { x1: totalX1, x2: totalX2 };
}
function dividir (a,b) {
    return a/b;
}
console.log(bhaskara (-1, 6, 7, dividir));