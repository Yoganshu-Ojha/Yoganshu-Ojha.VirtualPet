var dog;
var dog_img;
var dog_img2;
var foodS;
var foodStocks;
var database;


function preload()
{
  dog_img = loadImage("images/dogimg.png");
  dog_img2= loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);

  foodStocks=database.ref("Food")

  dog= createSprite(250,250,10,10);
  dog.addImage(dog_img);
  dog.scale = 0.20;
  
}


function draw() {  

  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dog_img2);
  }

  fill("White");
  text("NOTE : Press UP_ARROW To Feed The Dog Milk",125,15);

  drawSprites();

}

function readStocks(data) {
  foodS=data.val();
}

function writeStock(x){

  if (x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}




