var music=new Audio();
music.src="http://212.83.151.18:41643/stream.mp3";
music.loop=true;
music.pause();   
   
function myFunction(x) {
            
x.classList.toggle("fa-stop-circle");
            
if(music.paused){
    music.play();
}else{
    music.pause();    
}
    
}
