var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Ismail
var lives = 0;
var car1, car2, car3, car4;
var boundary1, boundary2;
var player;

boundary1 = createSprite(190,120,420,3);
boundary2 = createSprite(190,260,420,3);

player = createSprite(20,190,13,13);
player.shapeColor = "green";

car1 = createSprite(115,130,10,10);
car1.shapeColor = "red";
car1.velocityY = 5;
car2 = createSprite(215,130,10,10);
car2.shapeColor = "red";
car2.velocityY = -5;
car3 = createSprite(165,250,10,10);
car3.shapeColor = "red";
car3.velocityY = 5;
car4 = createSprite(265,250,10,10);
car4.shapeColor = "red";
car4.velocityY = -5;

function draw() {
  background("white");
  text("Lives: " + lives,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  player.bounceOff(boundary1);
  player.bounceOff(boundary2);
  if (keyDown("up")){
    player.y = player.y -2;
  }
  if (keyDown("down")){
    player.y = player.y + 2;
  }
  if (keyDown("right")){
    player.x = player.x + 2;
  }
  if (keyDown("left")){
    player.x = player.x -2;
  }
  drawSprites();
  if (player.isTouching(car1) || player.isTouching(car2) || player.isTouching(car3) || player.isTouching(car4)){
    player.x = 20;
    player.y = 190;
    lives = lives + 1;
  }
  if (player.x >= 345){
    textSize(20);
    fill("black");
    textAlign(CENTER);
    text("You made it!!",200,285);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
