function myFunction() {
    var x = document.getElementById("shareGrid");
    button = document.getElementById("oriButton")
    x.style.display = "grid"
    button.style.opacity = "0";
}

function disFunction() {
    var x = document.getElementById("shareGrid");
    button = document.getElementById("oriButton")
    x.style.display = "none";
    button.style.opacity = "1";
}