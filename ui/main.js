console.log('Loaded!');
alert('Click ok to continue');

var element = document.getElementById('main-text')
element.innerHTML = 'New value';

var img = document.getElementById('img')

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft +   1;
    img.style.marginLeft    =   marginLeft  +   'px';
}
img.onclick = function(){
    
    var interval = setInterval(moveRight,50);
};