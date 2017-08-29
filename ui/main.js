console.log('Loaded!');

var element = document.getElementById("maintext");
element.innerHTML = "Newwwww txt updated";
var marginLeft = 0;

function moveRight(){
    marginLeft =marginLeft + 10;
    img1.style.marginLeft = marginLeft + 'px';
}
var img1 = document.getElementById("img1");
img1.onClick = function() {
    img1.style.marginLeft = "100px";
    
   // var Interval = setInterval(moveRight, 100);
};