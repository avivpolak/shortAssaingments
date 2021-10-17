/** @format */

import "./styles.css";
import { add, sub, divide, multiply, equals } from "./helpers/math";
import { state } from "./helpers/state";

document.getElementById("calc").addEventListener("click", handleclick);

function handleclick(e) {
    const target = e.target.value;
    if (!state.action) {
        state.flag = "n1";
    }
    if ("1234567890.".includes(target) && e.target.id !== "result") {
        document.getElementById("result").value += target;
        state[state.flag] = parseFloat(document.getElementById("result").value);
    }
    if ("+".includes(target)) {
        state.action = (a, b) => a + b;
        document.getElementById("add").classList.toggle("pressed");
        document.getElementById("result").value = "";
        removePressed("add");
        state.flag = "n2";
    }
    if ("-".includes(target)) {
        state.action = (a, b) => a - b;
        document.getElementById("sub").classList.toggle("pressed");
        document.getElementById("result").value = "";
        removePressed("sub");
        state.flag = "n2";
    }
    if ("/".includes(target)) {
        state.action = (a, b) => a / b;
        document.getElementById("div").classList.toggle("pressed");
        document.getElementById("result").value = "";
        removePressed("div");
        state.flag = "n2";
    }
    if ("X".includes(target)) {
        state.action = (a, b) => a * b;
        document.getElementById("mult").classList.toggle("pressed");
        document.getElementById("result").value = "";
        removePressed("mult");
        state.flag = "n2";
    }
    if ("=".includes(target)) {
        if (!state.action) {
            document.getElementById("mainResult").value = "choose action";
            return;
        }
        let result = equals(state.n1, state.n2, state.action);
        document.getElementById("result").value = "";
        document.getElementById("mainResult").value = result;
        removePressed();
        state.action = null;
        state.n1 = result;
        state.n2 = 0;
        console.log(state);
    }
}
function removePressed(action) {
    for (let elem of document.getElementsByTagName("input")) {
        if (elem.id !== action) elem.classList.remove("pressed");
    }
}
