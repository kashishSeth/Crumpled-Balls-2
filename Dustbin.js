class Dustbin{
    constructor(x,y,width,height,angle){
      var Dustbin_Options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,Dustbin_Options);
        this.width= width;
        this.height=height;
    Body.setAngle(this.body,angle);
    this.image=loadImage("sprites/dustbin.png");
    World.add(world,this.body);    
}
display(){
    var pos = this.body.position
    var angle = this.body.angle


push()        
translate(pos.x,pos.y)
rotate(angle)
//imageMode(CENTER);
strokeWeight(3);
stroke("Black")
fill("Grey");
//image(this.image,0,0,60,80);
pop() 
imageMode(CENTER);
image(this.image,660,580,80,100) 
}

}