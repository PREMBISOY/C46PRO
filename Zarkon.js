class Zarkon{
constructor(x,y){
this.body = createSprite(x,y,100,150);
this.body.velocityX = random(-6,6);
this.image = loadImage('images/zarkon.png');
this.body.addImage('zarkon',this.image);
        //this.body.setCollider('rectangle',0,0,50,180);
        this.body.scale = 0.5;


}
zarkonActivity(){
    this.body.bounceOff(edges);
    if(this.body){
       
        if(frameCount%45 === 0){
            var laserZ = createSprite(395,200,5,50);
            console.log('armyActiveted');
            laserZ.x = this.body.x;
            laserZ.y = this.body.y;
            laserZ.velocityY = 8;
            laserZ.lifetime = 100; 
            laserZ.scale = 0.05;
            laserZ.addImage('laserZ_img',laserZ_img);  
            laserZGroup.add(laserZ);
          }
    }
}


}