var music = document.getElementById("sonido");
music.pause();   
   
function myFunction(x){
    x.classList.toggle("fa-stop-circle");

    if(music.paused){
        music.play();
    }else{
        music.pause();
    }
}
