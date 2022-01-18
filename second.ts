
// let message;
// message = 'abc';
// let endWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');


// let log = function(messages){
//   console.log(messages);
// };

// let doLog = (messages) => console.log(messages)

// let drawPoint = (point: number) => {
  //...
// };

// interface Point {
//   x: number,
//   y: number,
//   draw: () => void //return nothing
// };

// let drawPoint = (point: Point) => {
//   //...
// }

// let getDistance = (pointA: Point, pointB: Point) => {
//   //...
// }

// let drawPoint = (point: {x: number, y: number}) => {
//   //...
// };

// drawPoint({
//   x: 1,
//   y: 2
// });

export class Point {
  private x: number; //private is not allowed to be changed <-> public
  y: number;

  constructor(x?: number, y?: number){
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('x: ' + this.x + ', y: ' + this.y)
  }

  getDistance(another: Point) {
    //...
  }
}

// let point = new Point();
// point.x = 1;
// point.y = 2;
// point.draw();

let point = new Point(1, 2);
point.y = 5; //apply to change valiable
point.draw();
