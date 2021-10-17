/** @format */

import "./styles.css";
import { add, sub, divide, multiply, equals } from "./helpers/math";
import { state } from "./helpers/state";

//document.getElementsByName("add")[0].addEventListener("click", handleAdd);
// function handleAdd(e) {
//     state.action = add();
//     state.n1 = document.getElementById("result").value;
//     document.getElementById("result").value = state.n1 + "+";
//     console.log(state.n1);
// }

document.getElementById("calc").addEventListener("click", handleclick);

function handleclick(e) {
    const target = e.target.value;
    // if (target && e.target.id !== "result" && !"+-/X".includes(target)) {
    //     document.getElementById("result").value += target;
    // }
    if ("1234567890.".includes(target) && e.target.id !== "result") {
        document.getElementById("result").value += target;
        state[state.flag] = parseFloat(document.getElementById("result").value);
        console.log(state);
    }
    if ("+".includes(target)) {
        state.action = (a, b) => a + b;
        document.getElementById("result").value = "+";
        state.flag = "n2";
    }
    if ("=".includes(target)) {
        let result = equals(state.n1, state.n2, state.action);
        document.getElementById("result").value = result;
        state.n1 = result;
        state.n2 = 0;
    }
}
