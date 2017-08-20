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