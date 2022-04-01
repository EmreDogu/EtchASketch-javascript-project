function getWidth() {
    return document.getElementById("container").offsetWidth;
}

function getHeight() {
    return document.getElementById("container").offsetHeight;
}

for(var i = 0; i < 16; i++) {
    var row = document.createElement("div");
    var width = getWidth();
    var height = getHeight();
    row.setAttribute("width", width);
    row.setAttribute("height", height);
    for(var j = 0; j < 16; j++) {
        var cell = document.createElement("div");
        width = row.getAttribute("width")/16;
        height = row.getAttribute("height")/16;
        cell.textContent = j;
        cell.style.width = width+"px";
        cell.style.height = height+"px";
        cell.style.background = "red";
        cell.style.display = "inline-block"

        row.appendChild(cell);
    }
    document.getElementById("container").appendChild(row);
}