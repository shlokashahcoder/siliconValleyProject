var canvas
var banana,bananaImg,mango,mangoImg,plum,plumImg,strawberry,strawberryImg,watermelon,watermelonImg
var guvava,guvavaImg,greenApple,greenAppleImg,kiwi,kiwiImg,orange,orangeImg,sugarApple,sugarAppleImg
var cherry,cherryImg,lychee,lycheeImg,peach,peachImg,pear,pearImg,promogranate,promogranateImg
var gameState = 0
var game,form

function preload(){
bananaImg = loadImage("banana.png")
plumImg = loadImage("plum.jpg")
guvavaImg = loadImage("guvava.jpg")
strawberryImg = loadImage("strawberry.jpg")
watermelonImg = loadImage("watermelon.jpg")
guvavaImg = loadImage("guvava.jpg")
greenAppleImg = loadImage("green_apple.jpg")
kiwiImg = loadImage("kiwi.jpg")
orangeImg = loadImage("orange.jpg")
sugarApple = loadImage("sugar_apple.jpg")
cherryImg = loadImage("cherry.jpg")
lycheeImg = loadImage("lychee.jpg")
peachImg = loadImage("peach.jpg")
pearImg = loadImage("pear.jpg")

}

function setup(){
canvas = createCanvas(displayWidth - 20, displayHeight-30)
database = firebase.database();
game = new Game();
  game.getState(); 
  game.start();
}


function draw(){
background("lavender")
drawSprites();

if(gameState===0){
 
  textSize(30)
  fill("red")
  text("WELCOME to fruit calory counter app!!",displayWidth/2-550,displayHeight/2-150)
  text(" This is a app in which you get the seasonal fruit names with calories"
  ,displayWidth/2-650,displayHeight/2-80)
  text("This gives you knowledge about how much calories you intake by a fruit.",displayWidth/2-650,displayHeight/2-20)
  text("This is going to help you stay healthy and fit!!",displayWidth/2-550,displayHeight/2+50)
  text("Click the buttons alongside to view!!",displayWidth/2-550,displayHeight/2+130)
  text("click referesh every time to see new set of fruits",displayWidth/2-550,displayHeight+100)
}

if(gameState===1){
  
  background("yellow")
  textSize(106)
  fill("red")
  text("Fruit Name",displayWidth/2-50,displayHeight/2-50)

  textSize(16)
  fill("red")
  text("Calories(per 1 unit)",displayWidth/2-10,displayHeight/2-50)

  textSize(16)
  fill("red")
  text("Image",displayWidth/2+40,displayHeight/2-50)

  textSize(15)
  text("BANANA",displayWidth/2-50,displayHeight/2-30)
  text("105",displayWidth/2-10,displayHeight/2-30)
  banana = createSprite(displayWidth/2+40,displayHeight-30)
  banana.addImage(bananaImg)

  text("MANGO",displayWidth/2-50,displayHeight/2)
  text("201",displayWidth/2-10,displayHeight/2)
  mango = createSprite(displayWidth/2+40,displayHeight)
  mango.addImage(mangoImg)

  text("WATERMELON",displayWidth/2-50,displayHeight/2+30)
  text("1371",displayWidth/2-10,displayHeight/2+30)
  watermelon =  createSprite(displayWidth/2+40,displayHeight+30)
  watermelon.addImage(watermelonImg)

  text("STRAWBERRY",displayWidth/2-50,displayHeight/2+50)
  text("4",displayWidth/2-10,displayHeight/2+50)
  strawberry = createSprite(displayWidth/2+40,displayHeight/2+50)
  strawberry.addImage(strawberryImg)

  text("PLUM",displayWidth/2-50,displayHeight/2+70)
  text("30",displayWidth/2-10,displayHeight/2+70)
  plum = createSprite(displayWidth/2+40,displayHeight/2+70)
  plum.addImage(plumImg)
  
}

if(gameState===2){
  textSize(6)
  fill("red")
  text("Fruit Name",displayWidth/2-50,displayHeight/2-50)

  textSize(6)
  fill("red")
  text("Calories(per 1 unit)",displayWidth/2-10,displayHeight/2-50)

  textSize(6)
  fill("red")
  text("Image",displayWidth/2+40,displayHeight/2-50)

  textSize(5)
  text("GUVAVA",displayWidth/2-50,displayHeight/2-30)
  text("105",displayWidth/2-10,displayHeight/2-30)
  guvava = createSprite(displayWidth/2+40,displayHeight-30)
  guvava.addImage(guvavaImg)

  text("GREEN APPLE",displayWidth/2-50,displayHeight/2)
  text("201",displayWidth/2-10,displayHeight/2)
  greenApple = createSprite(displayWidth/2+40,displayHeight)
  greenApple.addImage(greenAppleImg)

  text("KIWI",displayWidth/2-50,displayHeight/2+30)
  text("1371",displayWidth/2-10,displayHeight/2+30)
  kiwi =  createSprite(displayWidth/2+40,displayHeight+30)
  kiwi.addImage(kiwiImg)

  text("ORANGE",displayWidth/2-50,displayHeight/2+50)
  text("4",displayWidth/2-10,displayHeight/2+50)
  orange = createSprite(displayWidth/2+40,displayHeight/2+50)
  orange.addImage(orangeImg)

  text("SUGAR APPLE",displayWidth/2-50,displayHeight/2+70)
  text("30",displayWidth/2-10,displayHeight/2+70)
  sugarApple = createSprite(displayWidth/2+40,displayHeight/2+70)
  sugarApple.addImage(sugarAppleImg)
}

if(gameState===3){
  textSize(6)
  fill("red")
  text("Fruit Name",displayWidth/2-50,displayHeight/2-50)

  textSize(6)
  fill("red")
  text("Calories(per 1 unit)",displayWidth/2-10,displayHeight/2-50)

  textSize(6)
  fill("red")
  text("Image",displayWidth/2+40,displayHeight/2-50)

  textSize(5)
  text("CHERRY",displayWidth/2-50,displayHeight/2-30)
  text("105",displayWidth/2-10,displayHeight/2-30)
  cherry = createSprite(displayWidth/2+40,displayHeight-30)
  cherry.addImage(cherryImg)

  text("LYCHEE",displayWidth/2-50,displayHeight/2)
  text("201",displayWidth/2-10,displayHeight/2)
  lychee = createSprite(displayWidth/2+40,displayHeight)
  lychee.addImage(lycheeImg)

  text("PEACH",displayWidth/2-50,displayHeight/2+30)
  text("1371",displayWidth/2-10,displayHeight/2+30)
  peach =  createSprite(displayWidth/2+40,displayHeight+30)
  peach.addImage(peachImg)

  text("PEAR",displayWidth/2-50,displayHeight/2+50)
  text("4",displayWidth/2-10,displayHeight/2+50)
  pear = createSprite(displayWidth/2+40,displayHeight/2+50)
  pear.addImage(pearImg)

  text("PROMOGRANATE",displayWidth/2-50,displayHeight/2+70)
  text("30",displayWidth/2-10,displayHeight/2+70)
  promogranate = createSprite(displayWidth/2+40,displayHeight/2+70)
  promogranate.addImage(promogranateImg)

}



}
