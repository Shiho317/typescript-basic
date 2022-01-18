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
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x: ' + this.x + ', y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
