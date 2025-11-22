var h1 = document.querySelector('h1');
var btn = document.querySelector('button');


btn.addEventListener("click", function (){
    h1.innerHTML = "Changing USER....."
    setTimeout( function(){
        h1.innerHTML = 'hey'
    },2000)
})