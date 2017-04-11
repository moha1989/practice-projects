var djBox = document.getElementById("box");

djBox.addEventListener("mousemove", turnBlue);


function turnBlue() {
    djBox.style.backgroundColor = "blue";
    djBox.style.fontSize = "50px";
}