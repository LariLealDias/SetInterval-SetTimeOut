const btnToPlay = document.querySelector('#play');
const audio = document.querySelector('#audio');

btnToPlay.addEventListener("click", play);

function play(){
    setTimeout(()=>{
        audio.play();
        console.log("entrou no set")
    }, 5000)

    console.log("entrou no play")
}
