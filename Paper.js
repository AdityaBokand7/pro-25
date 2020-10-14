class Paper{
    constructor(x,y,diameter){
    var options = {
    isStatic:false,
        restitution:0, 
        friction:20,
        density:2
    }
    this.x=x;
    this.y=y;
    this.diameter = diameter;
    this.body = Bodies.circle(this.x, this.y,this.diameter/5, options)
    this.image = loadImage("paper.png")
    
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle= this.body.angle
      console.log(pos.x)
      console.log(pos.y)

        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill("yellow")
        imageMode(CENTER);
        image(this.image,0,0, this.diameter,this.diameter);
       
        pop();
      }
    };
    