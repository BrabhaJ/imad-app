console.log('Loaded!');

var element = document.getElementById("maintext");
element.innerHTML = "New txt updated";

var img = document.getElementById("img1");
img.onClick = function() {
    img1.style.marginLeft = "100px";
}