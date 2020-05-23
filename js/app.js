var music=new Audio("http://plusradio24.ddns.net:8000/plusradio24");
music.play();   
   
 function myFunction(x) {
            
   x.classList.toggle("fa-stop-circle");
   x.classList.add("fa-play-circle");
            
   if (isPlaying) {
     music.pause()
   } else {
     music.play();
   }

 };

 music.onplaying = function() {
   isPlaying = true;
 };
 music.onpause = function() {
   isPlaying = false;
 }
