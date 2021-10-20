let data = {};
function handleSubmit() {
    updateData();
    if (!validate(data.name, data.age, data.ability)) {
        return;
    }
    sendPost(JSON.stringify(data));
}
async function sendPost(json) {
    let req = await axios.post("http://localhost:3000", json);

    document.getElementById("result").innerHTML = req.data;
    console.log(req.data);
}
function validate(name, age, ability) {
    if (name === "" || age === "" || ability === "") {
        alert("insert name ,age , and ability");
        return false;
    }
    return true;
}
function updateData() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const ability = document.getElementById("ability").value;
    data = { name, age, ability };
}
let btn = document.getElementById("submit");
btn.addEventListener("click", handleSubmit);
document.addEventListener("focusout", updateData);
