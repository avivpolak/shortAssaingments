class cat {
    constructor(tiredness, hunger, lonliness, happiness, name) {
        this.name = name;
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.lonliness = lonliness;
        this.happiness = happiness;
    }

    feed() {
        this.tiredness++;
        this.hunger = 0;
        this.lonliness--;
        this.happiness += 3;

        return this;
    }

    hug() {
        this.tiredness -= 2;
        this.lonliness -= 4;
        this.happiness += 3;

        return this;
    }

    play() {
        this.tiredness--;
        this.hunger += 2;
        this.lonliness -= 5;
        this.happiness += 3;

        return this;
    }

    catnip() {
        this.tiredness -= 4;
        this.hunger += 2;
        this.lonliness = 0;
        this.happiness += 5;

        return this;
    }

    lazer() {
        this.tiredness -= 2;
        this.hunger++;
        this.lonliness -= 2;
        this.happiness += 2;

        return this;
    }

    dog() {
        this.tiredness = 0;
        this.hunger += 9;
        this.lonliness -= 3;
        this.happiness -= 6;

        return this;
    }

    pet() {
        this.tiredness = 2;
        this.lonliness -= 5;
        this.happiness += 5;

        return this;
    }

    treat() {
        this.hunger -= 1;
        this.lonliness -= 3;
        this.happiness += 5;
        document.getElementById("tiredness").innerText = this.tiredness;
        document.getElementById("hunger").innerText = this.hunger;
        document.getElementById("lonliness").innerText = this.lonliness;
        document.getElementById("happiness").innerText = this.happiness;
        return this;
    }
    getTiredness() {
        return this.tiredness;
    }
    getHunger() {
        return this.hunger;
    }

    getLonliness() {
        return this.lonliness;
    }
    getHappiness() {
        return this.happiness;
    }
    getName() {
        return this.name;
    }
}

const handlefeed = () => {
    focusedCat.feed();
    render(focusedCat);
};
const handlehug = () => {
    focusedCat.hug();
    render(focusedCat);
};

const handleplay = () => {
    focusedCat.play();
    render(focusedCat);
};

const handlecatnip = () => {
    focusedCat.catnip();
    render(focusedCat);
};

const handlelazer = () => {
    focusedCat.lazer();
    render(focusedCat);
};

const handledog = () => {
    focusedCat.dog();
    render(focusedCat);
};
const handlepet = () => {
    focusedCat.pet();
    render(focusedCat);
};

const handletreat = () => {
    focusedCat.treat();
    render(focusedCat);
};
function render(cat) {
    document.getElementById("tiredness").innerText = cat.getTiredness();
    document.getElementById("hunger").innerText = cat.getHunger();
    document.getElementById("lonliness").innerText = cat.getLonliness();
    document.getElementById("happiness").innerText = cat.getHappiness();
}

let focusedCat = null;

document.getElementById("feed").addEventListener("click", handlefeed);
document.getElementById("hug").addEventListener("click", handlehug);
document.getElementById("play").addEventListener("click", handleplay);
document.getElementById("catnip").addEventListener("click", handlecatnip);
document.getElementById("lazer").addEventListener("click", handlelazer);
document.getElementById("dog").addEventListener("click", handledog);
document.getElementById("pet").addEventListener("click", handlepet);
document.getElementById("treat").addEventListener("click", handletreat);

let cats = [];
function addCat(name) {
    let newcat = new cat(0, 0, 0, 0, name);
    cats.push(newcat);
}

function handleAddCat() {
    addCat(document.getElementById("nameInput").value);
    renderCatList();
}

document.getElementById("add").addEventListener("click", handleAddCat);

function setCat() {
    //console.log(document.getElementById("cats").value);
    focusedCat = getCatFromList(document.getElementById("cats").value);
    render(focusedCat);
    document.getElementById("title").innerHTML = focusedCat.getName();
}

function renderCatList() {
    document.getElementById("cats").innerHTML = "";
    for (let cat of cats) {
        let option = document.createElement("option");
        option.append(cat.getName());
        document.getElementById("cats").append(option);
    }
}
function getCatFromList(name) {
    for (let cat of cats) {
        if (cat.getName() === name) return cat;
    }
}
