class Army{
    constructor(x,y){
        this.body = createSprite(x,y,20,20); 
        this.body.velocityX = random(-4,4)
        //this.body.velocityY = random(1,4);

        this.image = loadImage('images/army_galra.png');
        this.body.addImage('galra',this.image);
        this.body.scale = 0.5;
    }
     armyActivity(){

        
       this.body.bounceOff(edges);
       console.log(world.frameCount);
       
        
    
        
        }
}