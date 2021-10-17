/** @format */

import "./styles.css";
import { add, sub, divide, multiply, equals } from "./helpers/math";
import { state } from "./helpers/state";

document.getElementById("calc").addEventListener("click", handleClick);
function handleAction(action) {
    switch (action) {
        case "add":
            state.action = add;
            break;
        case "sub":
            state.action = sub;
            break;
        case "mult":
            state.action = multiply;
            break;
        case "div":
            state.action = divide;
            break;
    }
    document.getElementById(action).classList.toggle("pressed");
    document.getElementById("mainResult").value =
        document.getElementById("result").value;
    document.getElementById("result").value = "";
    removePressed(action);
    state.flag = "n2";
}

function handleClick(e) {
    const target = e.target.value;
    if (!state.action) {
        state.flag = "n1";
    }
    if ("1234567890.".includes(target) && e.target.id !== "result") {
        document.getElementById("result").value += target;
        state[state.flag] = parseFloat(document.getElementById("result").value);
    }
    if ("+".includes(target)) {
        handleAction("add");
    }
    if ("-".includes(target)) {
        handleAction("sub");
    }
    if ("/".includes(target)) {
        handleAction("div");
    }
    if ("X".includes(target)) {
        handleAction("mult");
    }
    if ("=".includes(target)) {
        if (!state.action) {
            document.getElementById("mainResult").value = "choose action";
            return;
        }
        let actionSymbol;
        switch (state.action) {
            case sub:
                actionSymbol = "-";
                break;
            case add:
                actionSymbol = "+";
                break;
            case multiply:
                actionSymbol = "X";
                break;
            case divide:
                actionSymbol = "/";
                break;
        }
        let result = equals(state.n1, state.n2, state.action);
        document.getElementById("result").value = "";
        state.result = result;
        document.getElementById("mainResult").value =
            state.n1 +
            " " +
            actionSymbol +
            " " +
            state.n2 +
            " = " +
            state.result;
        state.n1 = result;
        removePressed();
        state.action = null;

        state.n2 = 0;
        console.log(state);
    }
    if ("Del".includes(target)) {
        let str = document.getElementById("result").value.toString();
        if (str.length > 1) {
            let newNum = parseFloat(str.substring(0, str.length - 1));
            document.getElementById("result").value = newNum;
            state[state.flag] = newNum;
        }
        if (str.length === 1) {
            let newNum = 0;
            document.getElementById("result").value = newNum;
            state[state.flag] = newNum;
        }
    }
}
function removePressed(action) {
    for (let elem of document.getElementsByTagName("input")) {
        if (elem.id !== action) elem.classList.remove("pressed");
    }
}
