var button = document.getElementById('counter');

button.onclick = function(){
    
    //Create a Reqest object
    var request = new XMLHttpRequest();
    
    //Capture response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status == 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    } ;
    
    //Make the request
    request.open('GET',"http://pandavsagar123.imad.hasura-app.io/counter",true)
    request.send(null); 
};

//Submit name

var submit = document.getElementById('submit_btn');

submit.onclick = function(){
    
    //Create a Reqest object
    var request = new XMLHttpRequest();
    
    //Capture response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status == 200){
                  //Capture list of names and renders it as a list  
                  var names = request.responseText;
                  names = JASON.parse(names);
                  var list = '';    
                  for(var i =0; i<names.length; i++){
                      list += '<li>' + names[i] + '</li>';
                  }
                  var ul = document.getElementById('namelist');
                  ul.innerHTML = list;
            }
        }
        //Not done yet
    } ;
    
    //Make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET',"http://pandavsagar123.imad.hasura-app.io/submit-name?name=" + name,true)
    request.send(null); 
  //Make req to server and send the names

  
};












//var element = document.getElementById('main-text')
//element.innerHTML = 'New value';

//var img = document.getElementById('img')

//var marginLeft = 0;
//function moveRight(){
//    marginLeft = marginLeft +   1;
//    img.style.marginLeft    =   marginLeft  +   'px';
//}
//img.onclick = function(){
//    var interval = setInterval(moveRight,50);
//};