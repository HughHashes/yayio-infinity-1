var backgroundColorTop, backgroundColorBottom;
var color1, color2, color3, color4, color5, color6;
// var xt;
// var yt;
// var xt1;
// var yt1;
// var xt2;
// var yt2;
// var xt3;
// var yt3;



function setup(){
  createCanvas(600,400);
  background(255);
  // Define your backdrop colors here
  backgroundColorTop = color(0,0,0); //starting color (top)
  backgroundColorBottom = color(0)//nding color (bottom)
  noLoop();

}

function draw(){
  strokeWeight(0); 
 
  //don't touch the code below
  setGradient(backgroundColorTop, backgroundColorBottom); //don't touch this
  //don't touch code above
  color1 = color(205, 57, 43, 200)  //kusama obliteration red
  color2 = color(255, 112, 45, 200)  //kusama obliteration orange
  color3 = color(255, 221, 73, 200)  //kusama obliteration yellow
  color4 = color(54, 142, 63, 200)  //kusama obliteration green
  color5 = color(38, 94, 168, 200)  //kusama obliteration blue
  color6 = color(209, 63, 117, 0) //kusama obliteration pink
  
  var numberOfVisitors = 15;
  var sizeOfSticker = 90;
  
  for(var i = 0; i < numberOfVisitors * 5; i++){
    fill(random([color1, color2, color3, color4, color5, color6]));
    xt = random(0, width);
    yt = random(0, height);
    rotate(PI/random(0, 36));
    triangle(xt, yt, xt + sizeOfSticker, yt, xt + (sizeOfSticker/2), yt - sqrt(sq(sizeOfSticker)-sq(sizeOfSticker/2)))
    rotate(0);
  
    for(var j = 0; j < 5; j++){
      fill(random([color1, color2, color3, color4, color5, color6]));
      xt = random(0, width);
      yt = random(0, height);
      rotate(PI/random(0, 36));
      triangle(xt, yt, xt + sizeOfSticker/1.5, yt, xt + ((sizeOfSticker/1.5)/2), yt - sqrt(sq(sizeOfSticker/1.5)-sq((sizeOfSticker/1.5)/2)))
      rotate(0);
      
      for(var k = 0; k < 3; k++){
        xt = random(0, width);
        yt = random(0, height);
        rotate(PI/random(0, 36));
        triangle(xt, yt, xt + sizeOfSticker/3, yt, xt + ((sizeOfSticker/3)/2), yt - sqrt(sq(sizeOfSticker/3)-sq((sizeOfSticker/3)/2)))
        rotate(0);
      }
    }
  }
  
}
  
  

/*DO NOT ANYTHING BELOW THIS LINE
This controls your gradient which is the background of your Canvas
getting into map() and lerpColor() is beyond the scope of this lesson
we may or may not go over this later in the course, it's just here to mix things up :)
*/
function setGradient(c1, c2) {
	for (var i = 0; i <= height; i++) {
		var inter = map(i, 0, height, 0, 1);
		var c = lerpColor(c1, c2, inter);
		stroke(c);
		line(0, i, width, i);
	}
}