console.log('Loaded!');
var ele = document.getElementById('main-text');
ele.innerHTML = "Happy Learning!!!!!";

var img = document.getElementById('img');
var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function(){
   var interval = setInterval(moveRight,100); 
};