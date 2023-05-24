
function setup() {
    x = 750;
    y = 650;
    var canvas3 = createCanvas(x, y);
    canvas3.parent('robot3');
    background(255);
    v = 0;
    u = 3;
    a=0;
    squareColor = 'gold';
    dotcolor = 'red';
}

function draw() {
    rectMode(CENTER);

    fill(250, 230, 200);
    rect(x / 2, (y / 44) * 23, x, (y / 8) * 5);

    //pad
    fill(150, 75, 10)
    quad((x / 40) * 35, (y / 40) * 34, (x / 40) * 5, (y / 40) * 34, (x / 40) * 19.5, (y / 40) * 9, (x / 40) * 20.5, (y / 40) * 9);
    fill(100, 50, 10)
    quad((x / 40) * 32, (y / 40) * 34, (x / 40) * 8, (y / 40) * 34, (x / 40) * 19.7, (y / 40) * 9, (x / 40) * 20.3, (y / 40) * 9);

    //bergen
    fill(130, 130, 170)
    quad((x / 40) * 2, (y / 40) * 4, (x / 40) * 3, (y / 40) * 6, (x / 40) * 5, (y / 40) * 9, 0, (y / 40) * 9);
    quad((x / 40) * 10, (y / 40) * 3, (x / 40) * 13, (y / 40) * 6, (x / 40) * 15, (y / 40) * 9, (x / 40) * 8, (y / 40) * 9);
    quad((x / 40) * 5, (y / 40) * 1, (x / 40) * 8, (y / 40) * 6, (x / 40) * 12, (y / 40) * 9, (x / 40) * 2, (y / 40) * 9);


    translate((x - 400) / 2, (y - 400) / 2);

    //gele stukken
    fill(squareColor);
    rect(200, 220, 120, 120);
    rect(200, 140, 20, 40);
    if (mouseIsPressed == false) { rect(130 - u, 160, 20, 60); rect(270 + u, 185, 20, 60); }
    if (mouseIsPressed == true) { rect(130 - u, 170, 20, 60); rect(270 + u, 170, 20, 60); }

    //licht grijze afwerking
    fill(180, 180, 180)
    ellipse(173, 110, 50, 40);
    ellipse(227, 110, 50, 40);
    rect(200, 180, 120, 35);

    fill(100, 100, 100);
    rect(130, 260, 30, 80);
    rect(270, 260, 30, 80);
    rect(200, 180, 60, 40);
    if (mouseIsPressed == false) { rect(130 - u, 105, 10, 50); }
    if (mouseIsPressed == true) { rect(130 - u, 115, 10, 50); }


   // Bereken de middelpunten van de ogen zonder translatie
   let originalLeftEyeX = 174;
   let originalRightEyeX = 226;
   let originalEyeY = 109;
 
   // Positie van de translatie
   let translateX = (x - 400) / 2;
   let translateY = (y - 400) / 2;
 
   // Pas de translatie toe op de oorspronkelijke coördinaten
   let transformedLeftEyeX = originalLeftEyeX;
   let transformedRightEyeX = originalRightEyeX;
   let transformedEyeY = originalEyeY;
 
   // Bereken de aangepaste muispositie
   let adjustedMouseX = mouseX - translateX;
   let adjustedMouseY = mouseY - translateY;
 
   // Bereken de afstand tussen de muispositie en het midden van elke oog
   let leftEyeDistance = dist(adjustedMouseX, adjustedMouseY, transformedLeftEyeX, transformedEyeY);
   let rightEyeDistance = dist(adjustedMouseX, adjustedMouseY, transformedRightEyeX, transformedEyeY);
 
   // Limiteer de beweging van de iris binnen de grenzen van de ogen
   let maxIrisMovement = 7;
   let leftIrisX = transformedLeftEyeX + maxIrisMovement * (adjustedMouseX - transformedLeftEyeX) / leftEyeDistance;
   let leftIrisY = transformedEyeY + maxIrisMovement * (adjustedMouseY - transformedEyeY) / leftEyeDistance;
   let rightIrisX = transformedRightEyeX + maxIrisMovement * (adjustedMouseX - transformedRightEyeX) / rightEyeDistance;
   let rightIrisY = transformedEyeY + maxIrisMovement * (adjustedMouseY - transformedEyeY) / rightEyeDistance;
 
   // Teken de ogen en de iris
   fill(250, 250, 250);
   ellipse(transformedLeftEyeX, transformedEyeY, 40, 31);
   ellipse(transformedRightEyeX, transformedEyeY, 40, 31);
   fill(20, 20, 20);
   ellipse(leftIrisX, leftIrisY, 20);
   ellipse(rightIrisX, rightIrisY, 20);
 

    //rubsbanden
    fill(20, 20, 20)
    for (v = 0; v < 90; v = v + 12) {
        rect(130, 220 + v, 30, 5);
        rect(270, 220 + v, 30, 5);
    }

    fill(100, 100, 100);
    if (mouseIsPressed == false) { rect(261 + u, 220, 15, 40); rect(279 + u, 223, 15, 40); rect(123 - u, 75, 10, 40); rect(137 - u, 85, 10, 20); }
    if (mouseIsPressed == true) { rect(261 + u, 210, 15, 40); rect(279 + u, 213, 15, 40); rect(123 - u, 95, 10, 40); rect(137 - u, 105, 10, 20); }

    fill(dotcolor);
    ellipse(180, 187, 10);
    ellipse(240, 265, 15);
    if (mouseIsPressed == true && a==0){sirene();a=1;}
}


function sirene() {
    if (dotcolor === 'red') {
        dotcolor = 'orange';
    } else {
        dotcolor = 'red';
    }
    setTimeout(sirene, 500);
}

