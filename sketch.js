function setup() {
    createCanvas(400, 400);
    background(" #00BCD4")
  }
  
   function draw() {
     stroke(" rgb(32,253,10)");
     fill(" #EA11B5");
     
     
      if (mouseIsPressed) {
         rect(mouseX, mouseY, 20, 35);
        }
      }