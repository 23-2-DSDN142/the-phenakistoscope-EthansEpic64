const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("smallruf" , "png");
  pScope.load_image_sequence("explosion", "png", 21);
}

function setup_layers(pScope){

  new PLayer(null, 133, 185, 199);  //lets us draw the whole circle background, ignoring the boundaries

  var spiral = new PLayer(road);
  spiral.mode( SWIRL(5) );
  spiral.set_boundary( 0, 1150 );

  var porsche = new PLayer(ruf);
  porsche.mode( SWIRL(5) );
  porsche.set_boundary( 0, 1150 );
  
  var tiresmoke = new PLayer(smoke);
  tiresmoke.mode( SWIRL(5) );
  tiresmoke.set_boundary( 0, 1150);

  var centerpistons = new PLayer(pistons);
  centerpistons.mode( RING );
  centerpistons.set_boundary( 0, 0 );

  var centergear = new PLayer(driveshaft);
  centergear.mode(RING);
  centergear.set_boundary(0,75);

  var outline = new PLayer(border);
  outline.mode( RING );
  outline.set_boundary(960,1150);

  var imagesequence = new PLayer(explosion);
  imagesequence.mode( RING );
  imagesequence.set_boundary( 0,1000 );
}

function explosion(x,y,animation,pScope){
  scale(2.5);
  pScope.draw_image_from_sequence("explosion", 0, 100, animation.frame);
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
  ellipse(pow(animation.frame, 2)*-230,animation.frame-25,animation.frame*25,animation.frame*25);
  ellipse(pow(animation.frame, 2)*-238,animation.frame-45,animation.frame*28,animation.frame*28);
  fill(150);
  ellipse(pow(animation.frame, 2)*-238,animation.frame-45,animation.frame*28,animation.frame*28);
}

function pistons(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 1.5
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(120); //very dark grey
  arc(x,y,600,600,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
  noStroke();
  fill(150)
  rect(-10,-130-animation.wave()*120,10,180)
  rect(-23,-130-animation.wave()*120,40,40) // .wave is a cosine wave btw
}

function road(x, y, animation, pScope){
  scale(animation.frame*2);
  noFill();
  strokeWeight(90);
  strokeCap(SQUARE);
  curve(-200,117,-189,23,185,0,200,130);
  //curve(-200,150,-150,10,200,5,200,150); //this was the original curve I used before I embraced the jank
  stroke(235, 213, 52);
  strokeWeight(5);
  strokeCap(ROUND);
  line(-160,23,-120,16);
  line(-90,10,-50,5);
  line(-20,0,20,-7);
  line(50,-7,90,-7);
  line(120,-5,160,0);
}

function ruf(x,y, animation, pScope){ //the lil car
    scale(animation.frame*0.2);
    rotate(120);
  pScope.draw_image("smallruf",x,0);
}

function border(x,y,animation,pScope){
  var black = color(0);
  var white = color(255);
  var outsidecolor = lerpColor(black,white,animation.frame);
  pScope.fill_background(outsidecolor);
 }

function driveshaft(x,y,animation,pScope){
 pScope.fill_background(150);
 fill(150);
 noStroke();
 rect(8,70, 20,20);
 rect(-16,70,20,20);
}