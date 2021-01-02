class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'isStatic' : true,
          'density' : 1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);

      this.image = loadImage("dustbingreen.png");

    }
    display(){
      var pos =this.body.position;

      push();
      translate(pos.x, pos.y);
      fill(0, 179, 0);
      imageMode(CENTER);
      image(this.image,0, 0, 200, 190);
      pop();
    }
  };