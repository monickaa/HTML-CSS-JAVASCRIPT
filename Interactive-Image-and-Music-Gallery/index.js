let prev=document.getElementById("Prev")
let next=document.getElementById("Next")

let photo=document.getElementById("Photo")
let i=0;
let images=["download","download (2)","download (3)","download (4)","download (5)"];
next.addEventListener('click',()=>{
  if(i<images.length-1){
    i++;
  }
  else{
    i=0;
  }
  photo.src="/images/"+images[i]+".jpeg";
})
prev.addEventListener('click',()=>{
  if(i>0){
    i--;
  }
  else{
    i=images.length-1;
  }
  photo.src="/images/"+images[i]+".jpeg";
})
