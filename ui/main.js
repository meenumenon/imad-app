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
//var counter = 0;

button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture request and store it in a variable
        request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status === 200){
                
               //Take the response in counter variable    
               var counter= request.responseText;
                var span =  document.getElementById('count');
                
                //Put the counter variable inside span
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //Make the request
    
   request.open('GET','http://meenumenonr.imad.hasura-app.io/counter',true);
    
    request.send(null);
    
    
    
    //Render variable in correct span
    
   // counter = counter+ 1;
   // console.log(counter);
   // var span =  document.getElementById('count');
    //span.innerHTML = counter.toString();
    
};

//Code for button counter - Ends here


//Code for the input name box

var nameInput = document.getElementById('name');
var name = nameInput.value;

var submit = document.getElementById('submit_btn');

//When submit button is clicked

submit.onclick = function(){

       //Create a request object
         var request = new XMLHttpRequest();
    
       //Capture request and store it in a variable
         request.onreadystatechange = function(){
           if(request.readyState === XMLHttpRequest.DONE){
            
                if(request.status === 200){
                
                 var names = request.responseText;
                 names = JSON.parse(names);
                 var list = '';
     
     //This will convert the names into HTML element and add it to variable list.
     for (var i =0;i<names.length;i++)
     {
         list +='<li>' +names[i]+ '</li>';
     }
     
     var ul = document.getElementById('namelist');
     ul.innerHTML = list;
     
      }
     }
    };
    
    request.open('GET','http://meenumenonr.imad.hasura-app.io/counter',true);
    request.send(null);
    
};