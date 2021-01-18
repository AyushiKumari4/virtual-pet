//Create variables here
var dog,happyDog,food1
var database,foddS,foodStock

function preload()
{
dog=loadImage("images/dogImg.png")
happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog1=createSprite(width/2, 400, 10,10)
  dog1.addImage(dog);
  dog1.scale=0.2
  database = firebase.database();
  foodStock= database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog1.addImage(happyDog)
}
  drawSprites();
  //add styles here
  fill("black")
  textSize(20)
text("Note: press up arrow key to feed milk",100,100)
//text("milk remaining:+food1 ,100,150)

}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
     food1=x
    x=0;
  }
  else{
x=x-1;
  }
database.ref('/').update({
  Food:x
})

}

