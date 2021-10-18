import {
    handleAction,
    handleEqual,
    handleDel,
    handleNum,
} from "./eventHelpers";
import { state } from "./state";

document.getElementById("calc").addEventListener("click", handleClick);

export function handleClick(e) {
    const target = e.target.value;
    if (!state.action) {
        state.flag = "n1";
    }
    if ("1234567890.".includes(target) && e.target.id !== "result") {
        handleNum(target);
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
        handleEqual();
    }
    if ("Del".includes(target)) {
        handleDel();
    }
}
