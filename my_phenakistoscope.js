const SLICE_COUNT = 18;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("smallruf" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 133, 185, 199);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(road);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 0, 1000 );

  var layer2 = new PLayer(ruf);
  layer2.mode( SWIRL(5) );
  layer2.set_boundary( 0, 1000 );

  var layer3 = new PLayer(pistons);
  layer3.mode( RING );
  layer3.set_boundary( 0, 0 );
}

function pistons(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 1.5
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(135,135,135)
  arc(x,y,500,500,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(85,85,85)
  rect(-8,-130-animation.wave()*100,40,40) // .wave is a cosine wave btw
  rect(-8,-130-animation.wave()*100,10,100)
}

function road(x, y, animation, pScope){
  
  scale(animation.frame*2);
  noFill();
  strokeWeight(90);
  curve(-200,90,-77,50.5,82,44,200,80);
}

function ruf(x,y, animation, pScope){
    scale(animation.frame*0.2);
  pScope.draw_image("smallruf",x,400);
}


