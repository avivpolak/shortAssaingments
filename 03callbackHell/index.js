function isRight(a, b, c) {
    return sqr(a) + sqr(b) === sqr(c);
}
function sqr(a) {
    return mult(a, a);
}
function mult(a, b) {
    return a * b;
}
console.log(isRight(1, 2, 3));
console.log(isRight(3, 4, 5));
console.log(isRight(6, 8, 10));
