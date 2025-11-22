 var grow = 0
 var btn = document.querySelector('button')
 var h2 = document.querySelector('h2')
 var inner = document.querySelector('.inner')

 let isDownloading = false;

 btn.addEventListener('click', function (){

    
    
    if (isDownloading)  return;
    

    isDownloading = true;

    var num = Math.random()*100
    console.log(num)

    var int = setInterval(() => {
        grow++
        h2.innerHTML = grow+'%'
        inner.style.width = grow+'%'
    }, 30)

    setTimeout(() =>{
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
        btn.classList.add('Downloaded')
        
    },3000)
 })