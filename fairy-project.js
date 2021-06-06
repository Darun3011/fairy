var starImg,bgImg;
var star, starBody;

var fairyImg,fairyAni,fairy;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here

	fairyImg = loadImage("fairy.png");

	fairyAni = laodAnimation("fairyimage1.png,fairyimage.png")
	
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy = createSprite(400,50,20,30);
	fairy.addAnimation(fairyAni);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
	
	if(star.y > 470 && starBody.positiony > 470){
		Matter.Body.setStatic(starBody,true);
	}

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
	if(keyCode === LEFT_ARROW){

	fairy.velocityX = -4;

	}

	if(keyCode === RIGHT_ARROW){

		fairy.velocityX = 4;
	
		}
}
