var hr , min , sec , Hangle , Mangle , Sangle

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
}

function draw() {
  background(0);  

  translate(200,200)
 rotate(-90)
 hr = hour()
 min = minute()
 sec = second()

 Sangle = map(sec,0,60,0,360)
 Mangle = map(min,0,60,0,360)
 Hangle = map(hr%12,0,12,0,360)

 push()
 rotate(Sangle)
 stroke("blue")
 strokeWeight(7)
 line(0,0,100,0)
 pop()

 push()
 rotate(Mangle)
 stroke("red")
 strokeWeight(7)
 line(0,0,75,0)
 pop()

 push()
 rotate(Hangle)
 stroke("yellow")
 strokeWeight(7)
 line(0,0,50,0)
 pop()

 point(0,0)
 strokeWeight(10)
 noFill()
 stroke("blue")
 arc(0,0,300,300,0,Sangle)
 stroke("red")
 arc(0,0,280,280,0,Mangle)
 stroke("yellow")
 arc(0,0,260,260,0,Hangle)
 

 



  drawSprites();
}