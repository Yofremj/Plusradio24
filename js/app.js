var music=new Audio("http://plusradio24.ddns.net:8000/plusradio24");
music.pause();   
   
function myFunction(x){
    x.classList.toggle("fa-stop-circle");

    if(music.paused){
        music.play();
    }else{
        music.pause();
    }
}
