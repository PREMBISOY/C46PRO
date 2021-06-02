const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var armyGroup;
var armySet = 1;
var edges;
var player;
var laserkGroup;
var laseraGroup;
var laserA_img;
var keith_life = 15; 
var gameState = 'PLAY';
var sheild; 
var sheildActivated = false;
var time = 0;
var sheildRecovery = false;
var bg_img;
var zarkon_life = 50;
var laserZGroup;
var zarkonGroup;
var empror;






function preload(){

  bg_img = loadImage("images/voltron--bg.jpeg");
  laserA_img = loadImage('images/glara_lasers.png');
  laserZ_img = loadImage('images/glara_lasers.png');
  
}




function setup() {
  createCanvas(displayWidth-10,displayHeight-100);
  
  player = new Keith(displayWidth/2,displayHeight/2-100);
  //empror = new Zarkon(width/2,height/2);
  
  



armyGroup = new Group();
laserkGroup = new Group();
laseraGroup = new Group();
laserZGroup = new Group();
zarkonGroup = new Group();




engine = Engine.create();
world = engine.world;
}
  
function draw() {
  background(bg_img);
  edges = createEdgeSprites();
  camera.position.x = player.body.x;
  camera.position.y = player.body.y;
  
  edges[0].visible = false;
  edges[1].visible = false;
  edges[2].visible = false;
  edges[3].visible = false;

if(gameState === 'PLAY'){
  
  switch(armySet)
  {
    case 1 :for(var i = 0;i<1;i++)
           {
            armyGroup.add(new Army(random(100,displayWidth-100),50).body);
           armySet = 'set1';
           }
           break;
   case 2 :for(var i = 0;i<2;i++)
          {
           armyGroup.add(new Army(random(100,displayWidth-100),50).body);
           armySet = 'set2';
           }
           break; 
   case 3 :for(var i = 0;i<4;i++)
          {
           armyGroup.add(new Army(random(100,displayWidth-100),50).body);
           armySet = 'set3';
           }
           break; 
   case 4 :for(var i = 0;i<6;i++)
          {
           armyGroup.add(new Army(random(100,displayWidth-100),50).body);
           armySet = 'set4';
           }
           break; 
   case 5 :for(var i = 0;i<8;i++)
           {
            armyGroup.add(new Army(random(100,displayWidth-100),50).body);
            armySet = 'set5';
            }
            break;
   case 6 :for(var i = 0;i<10;i++)
          {
           armyGroup.add(new Army(random(100,displayWidth-100),50).body);
           armySet = 'set6';
           }
           break; 
  
   case 7 :for(var i = 0;i<12;i++)
          {
           armyGroup.add(new Army(random(100,displayWidth-100),50).body);
           armySet = 'set7';
           }
           break; 
  
   case 8 :for(var i = 0;i<14;i++)
          {
           armyGroup.add(new Army(random(100,displayWidth-100),50).body);
           armySet = 'set8';
           }
           break; 
   case 9 :for(var i = 0;i<1;i++)
         {
           empror = new Zarkon(width/2,100);
           armySet = 'BOSS FIGHT'
         }
            break; 
  
  
           
  
  }
  armyDestruction();
  player.keithActivity();
   if(empror){
     empror.zarkonActivity();
   }
  
  armyDuty();
  
  keithDestruction();
  shieldActivation()
  playerDestruction();
  
    drawSprites();
    stroke('white');
    strokeWeight(2)
    fill('red');
  textSize(22);
  text('army = '+ armySet,player.body.x+300,player.body.y+200);
  text('HEALTH = '+ keith_life,player.body.x+300,player.body.y+300);
}



if(gameState === 'END'){

  stroke('white');
    strokeWeight(2);
    fill('red');
    textSize(22);
    text('MISSION FAILED!!!',width/2,height/2);

    if(keyDown('r')){
      
    gameState = 'PLAY';

    }

}



}

function armyDuty(){

for(var j = 0; j<armyGroup.length && armyGroup.length>0 ; j++)
{
//armyGroup[j].armyActivity();
//console.log(armyGroup[j]);
armyGroup[j].bounceOff(edges);
// console.log(frameCount);
if(frameCount%60 === 0){
  var laserA = createSprite(395,200,5,50);
  console.log('armyActiveted');
  laserA.x = armyGroup[j].x;
  laserA.y = armyGroup[j].y;
  laserA.velocityY = 5;
  laserA.lifetime = 90; 
  laserA.scale = 0.03;
  laserA.addImage('laserA_img',laserA_img);  
  laseraGroup.add(laserA);
}

}

}

function armyDestruction(){

for(var i=0;i<armyGroup.length && laserkGroup.length>0; i++){
  if(armyGroup[i].isTouching(laserkGroup))
  {
    armyGroup[i].destroy();

    if(armyGroup.length === 0 && armySet === 'set1')
    {
    armySet = 2;
     } 

     if(armyGroup.length === 0 && armySet === 'set2')
    {
    armySet = 3;
     } 

     if(armyGroup.length === 0 && armySet === 'set3')
    {
    armySet = 4;
     } 

     if(armyGroup.length === 0 && armySet === 'set4')
     {
     armySet = 5;
      } 
      if(armyGroup.length === 0 && armySet === 'set5')
     {
     armySet = 6;
      }

      if(armyGroup.length === 0 && armySet === 'set6')
     {
     armySet = 7;
      } 

      if(armyGroup.length === 0 && armySet === 'set7')
     {
     armySet = 8;
      } 
      if(armyGroup.length === 0 && armySet === 'set8')
     {
     armySet = 9;
      } 


  }
}



}


function keithDestruction(){

  for(var i=0;i<laseraGroup.length && laseraGroup.length>0; i++){
    if(laseraGroup[i].isTouching(player.body))
    {
      laseraGroup[i].destroy();
      keith_life  = keith_life - 1;
  
      
  
    }

    

    if(keith_life === 0)
    {
      player.body.destroy();
      gameState = 'END';
    }
   

  }
  
  
  
  }

  function shieldActivation(){
    if(keyDown('shift') && keyDown('s') && sheildActivated === false){
      time = 0;
    sheild = new Sheild(player.body.x,player.body.y);
    sheildActivated = true;
      
      
  }
  if(sheild && sheildActivated === true){
    console.log(time);
    sheild.sheildActivity();
   // sheildRecovery = false;
  }else{
    //sheildActivated = false;
    sheildRecovery = true;
    currentTime = second();
  }

if(sheildRecovery === true){
  
  time = second();
  text('SheildRecovering '+ time,player.body.x+300,player.body.y+350);
  if(time === 59){
    sheildActivated = false;
    sheildRecovery = false;
  }
 }
}

/*function zarkonDuty(){
  empror.body.bounceOff(edges);
    if(this.body){
       
        if(frameCount%45 === 0){
            var laserZ = createSprite(395,200,5,50);
            console.log('armyActiveted');
            laserZ.x = empror.body.x;
            laserZ.y = empror.body.y;
            laserZ.velocityY = 8;
            laserZ.lifetime = 100; 
            laserZ.scale = 0.05;
            laserZ.addImage('laserZ_img',laserZ_img);  
            laserZGroup.add(laserZ);
          }
    }
}*/

function playerDestruction(){
     for(var i=0;i<laserZGroup.length && laserZGroup.length>0; i++){
       if(laserZGroup[i].isTouching(player.body))
       {
          laserZGroup[i].destroy();
          keith_life  = keith_life - 3;
    
          if(keith_life <= 0)
          {
            keith_life = 0;
            player.body.destroy();
            gameState = 'END';
          }
    
       }
      }  
}


  
  