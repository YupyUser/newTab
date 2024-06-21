let container = document.querySelector(".time");


window.setInterval(()=>{
    var date = new Date(),

    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),

    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),

    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

    container.innerHTML = hours + ':' + minutes + ':' + seconds;
   
},1000)
