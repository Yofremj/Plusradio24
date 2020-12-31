var music = new Audio("http://stream.zeno.fm/n50fkrw6sm0uv");
music.pause();   
   
function myFunction(x){
    x.classList.toggle("fa-stop-circle");

    if(music.paused){
        music.play();
    }else{
        music.pause();
    }
}

