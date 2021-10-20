function handleSubmit() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const ability = document.getElementById("ability").value;
    if (!validate(name, age, ability)) {
        return;
    }
    const data = { name, age, ability };
    sendGet(JSON.stringify(data));
}
function sendGet(json) {}
function validate(name, age, ability) {
    if (name === "" || age === "" || ability === "") {
        alert("insert name ,age , and ability");
        return false;
    }
    return true;
}
let btn = document.getElementById("submit");
btn.addEventListener("click", handleSubmit);
