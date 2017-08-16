console.log('Loaded!');
var ele = document.getElementById('main-text');
ele.innerHTML = "Happy Learning!!!!!";

var img = document.getElementById('madi');
console.log(img);
img.onClick = function(){
    img.style.marginLeft ="500px";
};