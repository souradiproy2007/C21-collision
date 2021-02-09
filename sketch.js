var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200,200,50,80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400, 200, 80, 30);
  movingrect.shapeColor="green";
  ob1=createSprite(100,100,50,50);
  ob1.shapeColor="yellow";
  ob2=createSprite(200,100,50,50);
  ob2.shapeColor="pink";
  ob3=createSprite(300,100,50,50);
  ob3.shapeColor="SEAGREEN";
  ob4=createSprite(400,100,50,50);
  ob4.shapeColor="orange";
}

function draw() {
  background("black");  
  movingrect.x=mouseX;
movingrect.y=mouseY;
console.log(fixedrect.y-movingrect.y)

if(isTouching(movingrect,ob3)){
movingrect.shapeColor="blue";
ob3.shapeColor="blue";
}
else{
movingrect.shapeColor="green";
ob3.shapeColor="seagreen";
}
 drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2 &&
    object2.x-object1.x<=object1.width/2+object2.width/2&&
    object2.y-object1.y<=object1.height/+object2.height/2 && 
    object1.y-object2.y<=object1.height/2+object2.height/2){
  return true;
 }
 else{
   return false;
 }
}