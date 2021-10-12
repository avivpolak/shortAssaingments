let body = document.getElementById("body");
function changeColor(time, color, callback, reject) {
    let randomNum = Math.floor(Math.random() * 10);

    if (randomNum > 0) {
        setTimeout(() => {
            body.style.backgroundColor = color;
            callback();
        }, time);
    } else {
        reject();
        // console.log("your request was rejected ☹");
    }
}
changeColor(
    1000,
    "red",
    () => {
        changeColor(
            1000,
            "green",
            () => {
                changeColor(
                    1000,
                    "yellow",
                    () => {
                        changeColor(
                            1000,
                            "blue",
                            () => {
                                changeColor(
                                    1000,
                                    "black",
                                    () => {
                                        changeColor(
                                            1000,
                                            "grey",
                                            () => {
                                                changeColor(
                                                    1000,
                                                    "pink",
                                                    () => {
                                                        changeColor(
                                                            1000,
                                                            "brown",
                                                            () => {
                                                                changeColor(
                                                                    1000,
                                                                    "orange",
                                                                    () => {
                                                                        changeColor(
                                                                            1000,
                                                                            "purple",
                                                                            () => {
                                                                                changeColor(
                                                                                    1000,
                                                                                    "#ff66ff",
                                                                                    () => {
                                                                                        changeColor(
                                                                                            1000,
                                                                                            "#999966",
                                                                                            () => {
                                                                                                changeColor(
                                                                                                    1000,
                                                                                                    "#000099",
                                                                                                    () => {},
                                                                                                    console.log(
                                                                                                        "your request was rejected ☹"
                                                                                                    )
                                                                                                );
                                                                                            },
                                                                                            console.log(
                                                                                                "your request was rejected ☹"
                                                                                            )
                                                                                        );
                                                                                    },
                                                                                    console.log(
                                                                                        "your request was rejected ☹"
                                                                                    )
                                                                                );
                                                                            },
                                                                            console.log(
                                                                                "your request was rejected ☹"
                                                                            )
                                                                        );
                                                                    },
                                                                    console.log(
                                                                        "your request was rejected ☹"
                                                                    )
                                                                );
                                                            },
                                                            console.log(
                                                                "your request was rejected ☹"
                                                            )
                                                        );
                                                    },
                                                    console.log(
                                                        "your request was rejected ☹"
                                                    )
                                                );
                                            },
                                            console.log(
                                                "your request was rejected ☹"
                                            )
                                        );
                                    },
                                    console.log("your request was rejected ☹")
                                );
                            },
                            console.log("your request was rejected ☹")
                        );
                    },
                    console.log("your request was rejected ☹")
                );
            },
            console.log("your request was rejected ☹")
        );
    },
    console.log("your request was rejected ☹")
);
