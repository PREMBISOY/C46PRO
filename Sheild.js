class Sheild{
    constructor(x,y){
        this.body = createSprite(x,y,20,20);
        this.image = loadImage('images/sheild.png');
        this.body.addImage('sheild',this.image);
        this.body.scale = 0.5;
this.body.setCollider('circle',0,0,100);
this.body.lifetime = 500;
//this.body.debug = true;
    }
sheildActivity(){
    this.body.x = player.body.x;
    this.body.y = player.body.y;
    for(var i=0;i<laseraGroup.length && laseraGroup.length>0; i++){
        if(laseraGroup[i].isTouching(this.body))
        {
          laseraGroup[i].destroy();
          
      
          
      
        }
        
       


    
    }
}

}