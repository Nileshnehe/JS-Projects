var h1 = document.querySelector('h1')
var btn = document.querySelector('button')

btn.addEventListener('click', function(){
    h1.innerHTML  = 'I am Spider'
    h1.style.color ='Red'
    h1.style.fontSize = '80px'

})