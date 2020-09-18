class Paper{

    constructor(x,y,r){
        var Paper_Options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.r=r
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x,this.y,this.r/4,Paper_Options);
        this.image=loadImage("sprites/paper.png");
        World.add(world, this.body);
        }
        
        display(){
            var pos = this.body.position
            var angle = this.body.angle

        push()        
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        strokeWeight(3);
        stroke("Black")
        fill("White");
        image(this.image,0,0,this.r,this.r);
        pop()    
        }

}