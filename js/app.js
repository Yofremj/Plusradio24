var music=new Audio();
music.src="plusradio24.ddns.net:8000/plusradio24.mp3";
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
