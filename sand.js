class Sand{
    constructor(x, y, radius){
        var options = {
            'density' :0.05,
            'friction' :6,
            'restituition' :0.3
        }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.body = Bodies.circle(this.x, this.y, this.radius/2,  options);
    World .add(world , this.body);    
    }
    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        push ();
        translate (pos.x, pos.y);
        //rotate (angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill ("black");
        ellipse(0, 0, this.radius, this.radius);;
        pop ();
    }
}