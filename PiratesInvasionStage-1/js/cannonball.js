class CannonBall{
    constructor(x,y){
        this.radius=40;
        var option={
            restitution:0.8,
            friction:1,
            density:1,
            isStatic:true,
        }
        this.body=Bodies.circle(x,y,this.radius,option)
        World.add(world,this.body)
        this.image=loadImage("cannonball.png")
    }
 display(){
     push()
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
     imageMode(CENTER)
     image(this.image,0,0,this.radius,this.radius)
     pop()
 }
shoot(){
    console.log("inside shoot")
    var velocity=p5.Vector.fromAngle(cannon.angle)
    velocity.mult(20)
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
}
}

