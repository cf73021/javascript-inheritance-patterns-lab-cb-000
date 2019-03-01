function Point(x, y){
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function() {return
`(${this.x},${this.y})`;}
function Shape(x, y){
  this.x = x;
  this.y = y;
}

function Circle(radius){
  this.radius = radius
  Shape.call(this, x, y)
}

function Polygon(){}
function Side(){}
