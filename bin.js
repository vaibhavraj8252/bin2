class Bin{
    constructor(x,y,w,h){
        var ground_features = {
            isStatic : true,
            restitution:1,
            friction:2,
            density:0.1
            }
          this.ground = Bodies.rectangle(x,y,w,h,ground_features)
          World.add(world,this.ground)
          this.w=w;
          this.h=h;
          this.binI=loadImage("dustbingreen.png")
    }
    display(){
        push ()
        fill("red")
        translate (this.ground.position.x,this.ground.position.y)
        imageMode(CENTER)
        image(this.binI,0,0,100,100)
        pop ()
    }
}