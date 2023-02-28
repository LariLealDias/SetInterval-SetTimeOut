let textOriginal = document.querySelector("#text").innerHTML;

setInterval(()=>{
    let newText =  document.querySelector("#text");
    newText.innerHTML = "Usando o setInterval para alterar o texto de um elemento HTML a cada 3 segundos.";
    setTimeout(()=>{
        newText.innerHTML = textOriginal;
    }, 3000);
}, 6000);
