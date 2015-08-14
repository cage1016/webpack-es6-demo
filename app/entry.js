import {
  Rectangle, Triangle
}
from './Polygon';

let r = new Rectangle([
  [4, 4],
  [4, -4],
  [-4, -4],
  [-4, 4],
]);

let t = Triangle.create([
  [4, 6],
  [4, -4],
  [8, -4],
])

let body = document.querySelector('body');
body.innerHTML = [
  r.toString(),
  r.getPoints(),
  t.toString(),
  t.getPoints(),
].join('<br/>');
