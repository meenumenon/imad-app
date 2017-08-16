console.log('Loaded!');
//var ele = document.getElementById('main-text');
//ele.innerHTML = "Happy Learning!!!!!";

//Code for moving image - Starts here 
/*
var img = document.getElementById('img');
var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
   var interval = setInterval(moveRight,100); 
};

//Code for moving image - Ends here 

*/

//Code for button counter - Starts here

var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    counter = counter+ 1;
    console.log(counter);
    var span =  document.getElementById('count');
    span.innerHTML = counter.toString();
    
};

//Code for button counter - Ends here