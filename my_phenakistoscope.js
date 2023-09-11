const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("smallruf" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 133, 185, 199);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(road);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 0, 1150 );

  var layer2 = new PLayer(ruf);
  layer2.mode( SWIRL(5) );
  layer2.set_boundary( 0, 1150 );
  
  var layer4 = new PLayer(smoke);
  layer4.mode( SWIRL(5) );
  layer4.set_boundary( 0, 1150);
 
  var layer3 = new PLayer(pistons);
  layer3.mode( RING );
  layer3.set_boundary( 0, 0 );
}

function smoke(x,y, animation, pScope){
  ellipse(pow(animation.frame+0.1, 2)*-200,animation.frame,animation.frame*25,animation.frame*25);
  ellipse(pow(animation.frame+0.1, 2)*-220,animation.frame-30,animation.frame*40,animation.frame*45);
  ellipse(pow(animation.frame, 2)*-100,animation.frame-10,animation.frame*25,animation.frame*15);
  ellipse(pow(animation.frame, 2)*-110,animation.frame-30,animation.frame*45,animation.frame*15);
  ellipse(pow(animation.frame, 2)*-140,animation.frame-10,animation.frame*30,animation.frame*30);
  ellipse(pow(animation.frame, 2)*-120,animation.frame,animation.frame*20,animation.frame*20);
  ellipse(pow(animation.frame, 2)*-100,animation.frame-10,animation.frame*20,animation.frame*20);
  ellipse(pow(animation.frame, 2)*-200,animation.frame-55,animation.frame*40,animation.frame*40);
  ellipse(pow(animation.frame, 2)*-150,animation.frame-50,animation.frame*20,animation.frame*20);
  ellipse(pow(animation.frame, 2)*-100,animation.frame-20,animation.frame*25,animation.frame*25);
  ellipse(pow(animation.frame, 2)*-160,animation.frame-30,animation.frame*20,animation.frame*20);
  ellipse(pow(animation.frame, 2)*-165,animation.frame-40,animation.frame*24,animation.frame*24);
  ellipse(pow(animation.frame, 2)*-180,animation.frame-20,animation.frame*25,animation.frame*25);
  ellipse(pow(animation.frame, 2)*-170,animation.frame-20,animation.frame*25,animation.frame*25);
  ellipse(pow(animation.frame, 2)*-190,animation.frame-15,animation.frame*25,animation.frame*25);
}


function pistons(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 1.5
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(135,135,135);
  arc(x,y,600,600,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(85,85,85)
  rect(-10,-130-animation.wave()*120,10,100)
  rect(-23,-130-animation.wave()*120,40,40) // .wave is a cosine wave btw
}

function road(x, y, animation, pScope){
  
  scale(animation.frame*2);
  noFill();
  strokeWeight(90);
  strokeCap(SQUARE);
  curve(-200,117,-189,23,185,0,200,130);
  //curve(-200,150,-150,10,200,5,200,150);
  stroke(235, 213, 52);
  strokeWeight(5);
  strokeCap(ROUND);
  line(-160,23,-120,16);
  line(-90,10,-50,5);
  line(-20,0,20,-7);
  line(50,-7,90,-7);
  line(120,-5,160,0);
}

function ruf(x,y, animation, pScope){
    scale(animation.frame*0.2);
    rotate(120);
  pScope.draw_image("smallruf",x,0);
}


