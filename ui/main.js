console.log('Loaded!');
//var ele = document.getElementById('main-text');
//ele.innerHTML = "Happy Learning!!!!!";

var img = document.getElementById('img');
var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function(){
   var interval = setInterval(moveRight,100); 
};

var button = document.getElementById("counter");
var counter = 0;

button.onClick = function(){
    
    var span =  document.getElementById("count");
    span.innerHTML = counter.toString();
    
}