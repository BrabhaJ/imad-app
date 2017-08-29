console.log('Loaded!');

var element = document.getElementById("maintext");
element.innerHTML = "New txt updated";
var marginLeft = 0;

function moveRight(){
    marginLeft =marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
var img = document.getElementById("img1");
img.onClick = function() {
    //img.style.marginLeft = "100px";
    
    var Interval = setInterval(moveRight, 100);
};