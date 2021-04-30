class Hammer{
    constructor(x, y){
        var options = {
            'density' :10,
            'friction' :10,
            'restituition' :10
        }
    this.body = Bodies.rectangle(x, y, 40, 40, options);
    this.width = 150;
    this.height = 40;
    World .add(world , this.body);    
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        
        push ();
        translate (pos.x, pos.y);
        rotate (this.body.angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill ("lightblue");
        rect(0, 0, this.width, this.height);
        pop ();
    }
}