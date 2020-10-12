class Paper{
    constructor(x,y,diameter){
    var options = {
    isStatic:true,
        restitution:1, 
        friction:1,
        density:1
    }
    this.x=x;
    this.y=y;
    this.diameter = diameter;
    this.body = Bodies.circle(this.x, this.y,this.diameter/2, options)
    this.image = loadImage("paper.png")
    
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
      console.log(pos.x)
      console.log(pos.y)
        push();
        fill("yellow")
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.diameter,this.diameter);
       
        pop();
      }
    };
    