export function add(n1, n2) {
    return n1 + n2;
}
export function sub(n1, n2) {
    return n1 - n2;
}
export function multiply(n1, n2) {
    return n1 * n2;
}
export function divide(n1, n2) {
    return n1 / n2;
}
export function equals(n1, n2, callback) {
    return parseFloat(callback(n1, n2).toFixed(2));
}
