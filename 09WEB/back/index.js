//const validStudent = require("validStudent");
//const validStudent = require("validStudent");
const db = require("./db");
const http = require("http");
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
};
const server = http.createServer((req, res) => {
    if (req.method === "OPTIONS") {
        res.writeHead(208, headers);
        res.end();
        return;
    }
    res.writeHead(200, "ok", headers);
    // fs.readFile("cat.html", (err, data) => {
    //     if (err) {
    //         res.writeHead(404, "no good");
    //         res.write("not found");
    //     } else {
    //         res.write(data);
    //     }
    // });

    let body = "";
    req.on("data", (data) => {
        body = data.toString();
    });
    req.on("end", () => {
        if (validate(body)) {
            res.write("ok");
        } else {
            res.write("not ok");
        }

        res.end();
    });

    if (req.url === "/api") {
        res.write("hello from api");
        res.end();
    }
});
function validate(json) {
    console.log(db.validStudent.nameNotEqual, JSON.parse(json).name);
    if (
        !db.validStudent.nameNotEqual.includes(JSON.parse(json).name) &&
        JSON.parse(json).age >= db.validStudent.minAge &&
        JSON.parse(json).age <= db.validStudent.maxAge &&
        db.validStudent.ability.includes(JSON.parse(json).ability)
    )
        return true;
    return false;
}

const os = require("os");
console.log(os.freemem());
// if (req.url === "/api/users"){
//     req.write("ofer ,aviv, bla ,bla")
//     res.end()
// }

// res.write("hello");
// res.end();
// });

const port = 3000;
server.listen(port, () => {
    console.log(`listening on port ${port}`);
});
