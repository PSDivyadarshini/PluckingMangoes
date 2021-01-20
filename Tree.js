class Tree{
    constructor(x,y,width,height){
      this.body=Bodies.rectangle(x,y,width,height);
      this.width=width;
      this.height=height;
      this.image=loadImage("Plucking mangoes/tree.png")
      World.add(world,Tree);
    }
    display(){
     var pos=this.body.position;
    push();
    rectMode(CENTER);
    strokeWeight(4);
    fill("brown");
    image(this.image,pos.x,pos.y,this.width,this.height);
    pop();
   
    }
}