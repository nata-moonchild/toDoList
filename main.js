var ul = document.getElementById("list");
var input = document.getElementById("text");
var button = document.getElementById("btn");

function inputLen() {
    return input.value.length;
}

function newElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
button.addEventListener("click", function () {
    if (inputLen() > 0)
        newElement();
})

input.addEventListener("keypress",
    function (event) {
        if (inputLen() > 0 && event.keyCode == 13) {
            newElement();
        }
    })

var star = document.getElementById("list").addEventListener("click", function (e) {
    var target = e.target
    if (target.matches("li")) {
        target.classList.toggle("star")
    }
})