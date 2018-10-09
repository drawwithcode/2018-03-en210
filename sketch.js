function preload(){
  // put preload code here
}

function setup() {
}

function draw() {
  createCanvas(windowWidth,windowHeight)
frameRate(30)

  background(0)
  noStroke()
 for(a=0;a<windowWidth;a+=10){
   for(b=0;b<windowHeight;b+=10){

     ellipse(a,b,10)
    if(a+Math.random()*1000>mouseX &&
       a-Math.random()*1000<mouseX &&
        b+Math.random()*600>mouseY &&
         b-Math.random()*600<mouseY) {
      fill(255-a/5+(mouseX*Math.random()+frameCount%400),a/5+(mouseY*Math.random()),b/5+frameCount%400)}
    else{fill(255-a/5+frameCount%100,a/5+frameCount%200,b/5+frameCount%400)}



   }}


}
