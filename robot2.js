function setup() {
  var canvas2 = createCanvas(400, 400);
  canvas2.parent('robot2');
    //createCanvas(400, 400); 
    background(255);
    x = 0
    u=3
  }
  
  function draw() {
    rectMode(CENTER);
    
    fill(250,230,200);
    rect(200,216,400,250);
    
   //pad
    fill(150,75,10)
    quad(350,340,50,340,195,90,205,90)
    fill(100,50,10)
    quad(320,340,80,340,197,90,203,90)
    
   //bergen
    fill(130,130,170)
    quad(20,40,30,60,50,90,0,90)
    quad(100,30,130,60,150,90,80,90)
    quad(50,10,80,60,120,90,20,90)
    
   //gele stukken
    fill(255,220,0);
    rect(200,220,120,120);
    rect(200,140, 20,40);
    if (mouseIsPressed == false) {rect(130-u,160, 20,60);rect(270+u,185, 20,60);}
    if (mouseIsPressed == true) {rect(130-u,170, 20,60);rect(270+u,170, 20,60);}
    
   //licht grijze afwerking
    fill(180,180,180)
    ellipse(173,110,50,40); 
    ellipse(227,110,50,40);
    rect(200,180,120,35);
    
    fill(100,100,100);
    rect(130,260,30,80);
    rect(270,260,30,80);
    rect(200,180,60,40); 
    if (mouseIsPressed == false) {rect(130-u,105, 10,50);}
    if (mouseIsPressed == true) {rect(130-u,115, 10,50);}
    
    
    //  mouse position en middel van elke eye
  let leftEyeDistance = dist(mouseX, mouseY, 174, 109);
  let rightEyeDistance = dist(mouseX, mouseY, 226, 109);
   
 // limit iris movement within boundaries of the eyes
  let maxIrisMovement = 7;
  let leftIrisX = 174 + maxIrisMovement * (mouseX - 174) / leftEyeDistance;
  let leftIrisY = 110 + maxIrisMovement * (mouseY - 112) / leftEyeDistance;
  let rightIrisX = 226 + maxIrisMovement * (mouseX - 226) / rightEyeDistance;
  let rightIrisY = 110 + maxIrisMovement * (mouseY - 112) / rightEyeDistance;
  
  // eye en iris
  fill(250, 250, 250);
  ellipse(174, 109, 40, 31); 
  ellipse(226, 109, 40, 31);
  fill(20, 20, 20);
  ellipse(leftIrisX, leftIrisY, 20); 
  ellipse(rightIrisX, rightIrisY, 20);

   //rubsbanden
    fill(20,20,20)
    for(x =0; x<90; x= x+12){
      rect(130,220+x,30,5);
      rect(270,220+x,30,5);
    }
    
    fill(100,100,100);
    if (mouseIsPressed == false) {rect(261+u,220,15,40);rect(279+u,223,15,40);rect(123-u,75,10,40);rect(137-u,85,10,20);}
    if (mouseIsPressed == true)  {rect(261+u,210,15,40);rect(279+u,213,15,40);rect(123-u,95,10,40);rect(137-u,105,10,20);}
  
    fill(255,0,0);
    ellipse(180,187,10);
    ellipse(240,265,15);
  
    
  }