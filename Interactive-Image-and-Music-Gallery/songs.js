let previous=document.getElementById("Previous")
let next=document.getElementById("Next")
let pause=document.getElementById("Pause")
let play=document.getElementById("Play")
let volumedown=document.getElementById("Volumedown")
let volumeup=document.getElementById("Volumeup")
let restart=document.getElementById("Restart")

let photo=document.getElementById("Photo")
let images=["d1","d2","d3","d4","d5"];
let audios=["1","2","3","4","5"];
let player=new Audio("/songs/1.mpeg");
play.addEventListener('click',()=>{
  player.play();
})
pause.addEventListener('click',()=>{
  player.pause();
});
player.volume=0.1;
volumeup.addEventListener('click',()=>{
  
  player.volume=player.volume+0.1;
})

volumedown.addEventListener('click',()=>{
  
  player.volume=player.volume-0.1;
})
let i=0;



next.addEventListener('click',()=>{
  player.pause();
  if(i<images.length-1){
    i++;
  }
  else{
    i=0;
  }
  photo.src="/images/"+images[i]+".jpeg";
  player=new Audio("/songs/"+audios[i]+".mpeg")
  player.play();
})




previous.addEventListener('click',()=>{
  player.pause();
  if(i>0){
    i--;
  }
  else{
    i=images.length-1;
  }
  photo.src="/images/"+images[i]+".jpeg"
  player=new Audio("/songs/"+audios[i]+".mpeg")
  player.play();
})

restart.addEventListener('click',()=>{
  player.currentTime=0;
  player.play();
})
