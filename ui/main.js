console.log('Loaded!');
alert('Click ok to continue');

var element = document.getElementById('main-text')
element.innerHTML = 'New value';

var img = document.getElementById('img')
img.onclick = function(){
    img.style.marginLeft = '100px';
};