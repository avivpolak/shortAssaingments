const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, "ok", {
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "text/html",
    });
    // fs.readFile("cat.html",(err,data)=>{
    //     if(err){
    //         res.writeHead(404,"no good")
    //         res.write("not found")
    //     }
    //     else{
    //         res.write(data)
    //     }
    res.on("data", (data) => {
        console.log(data);
    });
    // res.on("end", () => {
    //     res.write("end");
    //     res.end();
    // });
    res.end();
});
// if (req.url === "/api"){
//     req.write("hello from api")
//     res.end()
// }
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
