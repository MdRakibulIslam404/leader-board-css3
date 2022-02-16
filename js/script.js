// 1. change text color
document.getElementById("top-play-22").style.color = "hotpink";
document.getElementById("top-blg").style.color = "darkblue";

// 2. set bg color
const players = document.getElementsByClassName("player");
for (const player of players) {
    player.style.backgroundColor = "rgb(255,127,80)";
    player.style.padding = "12px";
    player.style.margin = "8px";
    player.style.borderRadius = "8px";
};

// 3. click to add item
function itemAddBtn() {
    const ulParent = document.getElementById("item-ul");
    const liChild = document.createElement("li");
    liChild.innerText = "newItem";
    ulParent.appendChild(liChild);
};

/* function itemAddBtn() {
    const items = ["C++", "Ruby", "C#", "swift"];
    for (let i = 0; i < items.length; i++) {
        const ulParent = document.getElementById("item-ul");
        const liChild = document.createElement("li");
        liChild.innerText = items[i];
        ulParent.appendChild(liChild);
    }
}; */

// 4. click to increase number and when input value is 5 then, button is disabled
document.getElementById("increase-btn").addEventListener("click", function () {
    const numInp = document.getElementById("num-inp");
    const inpValue = parseInt(numInp.value);
    numInp.value = 1 + inpValue;

    const btn = document.getElementById("increase-btn");
    if (numInp.value < 5) {
        btn.removeAttribute("disabled");
    }
    else {
        btn.setAttribute("disabled", true);
    }
});