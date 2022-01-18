
export class Point {
  constructor(private _x?: number, private _y?: number){
  }

  draw() {
    console.log('x: ' + this._x + ', y: ' + this._y)
  }

  get x() {
    return this._x;
  } //getter

  set x(value){
    if(value < 0)
      throw new Error('value cannot be less than 0.');

      this._x = value;
  } //setter
}

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();