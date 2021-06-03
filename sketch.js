var gamestate = "play" 
var score = 0
function preload() {
 bgImg = loadImage("images/bg.png")
  potImg = loadImage("images/rod.png");
  boyImg = loadImage("images/boy.png")
pot2Img = loadImage("images/pot 2.png")
wormImg = loadImage("images/worm.png")
  wonImg = loadImage("images/won.png")
boy2Img = loadImage("images/boy 2.png")
ruleImg = loadImage("images/notice.png")
fishImg = loadImage("images/f.png")
overImg = loadImage("images/over.png")
s = loadSound("JoyMusic.mp3")
}
function setup() {
  
  createCanvas(1366,657)
  bg = createSprite(683,329,1366,657)
  bg.addImage(bgImg)

   rules = createSprite(190,400,50,50)
   rules.addImage(ruleImg)
   rules.scale=0.4

   boy = createSprite(700,650,50,80)
   boy.addImage(boy2Img)
   boy.addImage(boy2Img)
   boy.scale = 0.1
   boy.visible=false
   
   invisibleGround = createSprite(695,650,1390,20);
   invisibleGround.visible = false
 
 won=createSprite(1000,500,10,40)
 won.addImage(wonImg)
 won.scale=0.6
 won.visible=false
 
 over=createSprite(1000,500,10,40)
 over.addImage(overImg)
 over.scale=0.6
 over.visible=false

pg = createGroup ()  
wg=createGroup()
fg=createGroup()

s.play()
}

function draw() {
  background(255);

  if (keyCode == 115){
    rules.visible=false
   
  }

if(gamestate == "play"){
boy.visible=true

  if(keyDown("space")&& boy.y > 160) {
    boy.velocityY = -13;
}
boy.velocityY = boy.velocityY + 0.8

  if(keyDown(LEFT_ARROW)){
    boy.velocityX=-3;
    boy.velocityY=0;
    boy.addImage(boyImg)

}
else if(keyDown(RIGHT_ARROW)){    
  boy.velocityX=3;
  boy.velocityY=0;
boy.addImage(boy2Img)

} 
if(boy.isTouching (pg)){
gamestate="end"
over.visible=true
}

if(boy.isTouching (wg)){
 score=+1
 wg.destroyEach()
}

if(boy.isTouching (fg)){
  score=+10
  gamestate="restart"
 }

boy.collide(invisibleGround);




pot()
worm()
fish()

}
   
  if(gamestate == "end" ){
    boy.velocityX = 700
    boy.velocityY = 650
    
   fg.destroyEach()
   wg.destroyEach()
   pg.destroyEach()
}
if(gamestate == "restart" ){
  boy.velocityX = 700
    boy.velocityY = 650
  won.visible=true
  fg.destroyEach()
  wg.destroyEach()
  pg.destroyEach()
}



drawSprites()
fill (0)
textSize (20)
text ("Score : "+score,100,30)

}
function pot(){
  if (frameCount % 100 === 0) {
    var a=random(600,1300)
    var b = random(70,100)
    p=createSprite(a,b,20,20);
    p.addImage(potImg)
    p.x = Math.round(random(100,1300))
    p.scale = 0.7
    p.lifetime=100
    pg.add(p)


    }
}

function worm(){
if (frameCount % 50 === 0) {
  var m=random(600,1300)
  var c = random(70,700)
w=createSprite(m,c,20,20);
w.addImage(wormImg)
w.x = Math.round(random(100,1300))
w.scale = 0.3
w.lifetime=120
wg.add(w)
}
}


function fish(){
  if (frameCount % 350 === 0) {
    var m=random(600,1300)
    var c = random(70,700)
  f=createSprite(m,c,20,20);
  f.addImage(fishImg)
  f.x = Math.round(random(100,1300))
  f.scale = 0.8
  f.lifetime=120
  fg.add(f)
  }
  }