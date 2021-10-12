let body = document.getElementById("body");
function changeColor(time, color, callback, reject) {
    let randomNum = Math.floor(Math.random() * 10);
i++
    if (randomNum>=0) {
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
                            "grey",
                            () => {
                                changeColor(
                                    1000,
                                    "BlueViolet",
                                    () => {
                                        changeColor(
                                            1000,
                                            "DarkOliveGreen",
                                            () => {
                                                changeColor(
                                                    1000,
                                                    "DarkGoldenRod",
                                                    () => {
                                                       
                                                    },
                                                    () => {
                                                        console.log(
                                                            "your request was rejected ☹"
                                                        );
                                                    }
                                                );
                                            },
                                            () => {
                                                console.log(
                                                    "your request was rejected ☹"
                                                );
                                            }
                                        );
                                    },
                                    () => {
                                        console.log(
                                            "your request was rejected ☹"
                                        );
                                    }
                                );
                            },
                            () => {
                                console.log("your request was rejected ☹");
                            }
                        );
                    },
                    () => {
                        console.log("your request was rejected ☹");
                    }
                );
            },
            () => {
                console.log("your request was rejected ☹");
            }
        );
    },
    () => {
        console.log("your request was rejected ☹");
    }
);
