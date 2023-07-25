function setup() {
    createCanvas(400, 400);
    background("#03A9F4");
  }
  
  function draw() {
    
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed){
       rect(mouseX, mouseY, 15, 15);
       }
    
    fill("rgb(202,11,245)")
    stroke("white")
    
    
  }