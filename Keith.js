class Keith{
    constructor(x,y){
        this.body = createSprite(x,y,20,20);
        this.image = loadImage('images/keith.png');
        this.body.addImage('keith',this.image);
        this.body.setCollider('rectangle',0,0,50,180);
        this.body.scale = 0.5;
        this.laserK_img = loadImage('images/keith_lasers.png');
        //this.body.debug = true
    }
keithActivity(){

    this.body.bounceOff(edges);
if(keyDown(RIGHT_ARROW) || keyDown('d'))
{
  this.body.x += 4 

}

if(keyDown(LEFT_ARROW) || keyDown('a'))
{
  this.body.x -= 4 

}

if(keyDown('x') && keyDown(RIGHT_ARROW))
{
 this.body.x += 8

}

if(keyDown('x') && keyDown(LEFT_ARROW))
{
    this.body.x -= 8 

}

if(this.body){
    if(keyDown('space') && laserkGroup.length === 0){
        var laser = createSprite(395,200,5,50);
        
        laser.x = this.body.x;
        laser.y = this.body.y;
        laser.velocityY = -5;
        laser.lifetime = 90; 
        laser.addImage('laserA_img',this.laserK_img);  
        laser.scale = 0.2
        laserkGroup.add(laser);
    }
}


    
    
  

}

    

}