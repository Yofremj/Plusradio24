var music=new Audio();
music.src="http://plusradio24.ddns.net:8000/plusradio24";
music.loop=true;
music.play();   
   
function myFunction(x) {
            
x.classList.toggle("fa-stop-circle");
            
if(music.play){
    music.pause();
}else{
    music.play();    
}
    
}
