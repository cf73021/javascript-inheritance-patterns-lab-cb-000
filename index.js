function Point(x, y){
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function() {return
`(${this.x},${this.y})`;
}

function Shape(){
}
Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y)
}
Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y)
}

function Circle(radius){
  this.radius = radius
  this.diameter = function() {return this.radius * 2 ;}
  this.area = function() {return this.radius**2 * Math.PI ;}
  this.circumference = function() {return this.radius * 2 * Math.PI ;}
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Shape;

function Side(length){
  this.length = length ;
}

function Polygon(sides) {
  this.sides = sides ;
}
