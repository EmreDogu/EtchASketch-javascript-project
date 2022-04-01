function getWidth() {
    return document.getElementById("container").offsetWidth;
}

function getHeight() {
    return document.getElementById("container").offsetHeight;
}

function myFunc(e) {
    const a = document.getElementsByClassName(e);
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    a[0].style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

for(var i = 0; i < 16; i++) {
    var row = document.createElement("div");
    var width = getWidth();
    var height = getHeight()/16;
    row.classList.add(i);
    row.setAttribute("width", width);
    row.setAttribute("height", height);
    for(var j = 0; j < 16; j++) {
        var cell = document.createElement("div");
        width = row.getAttribute("width")/16;
        height = row.getAttribute("height");
        cell.style.width = width+"px";
        cell.style.height = height+"px";
        cell.style.background = "black";
        cell.classList.add(`row${row.className}` + row.className + "" + j);
        cell.style.display = "inline-block"

        row.appendChild(cell);
    }
    document.getElementById("container").appendChild(row);
}

const container = document.querySelector("#container");
container.addEventListener("click", ev => {
    myFunc(ev.target.className);
})