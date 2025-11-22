var a = 0
var int = setInterval(function(){
    
    console.log(a)
    a++
    
},10)

setTimeout(function(){
    clearInterval(int)

},5000)