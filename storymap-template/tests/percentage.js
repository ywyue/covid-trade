//-1 when element below viewport
//0 when element is centered in the viewport
//1 when element is above viewport
function progress(top, rectHeight, viewportHeight) {
  const rectHeightHalf = rectHeight / 2;
  const viewportHeightHalf = viewportHeight / 2;

  const result =
    (viewportHeightHalf - rectHeightHalf - top) /
    (viewportHeightHalf + rectHeightHalf);

  return result;
}

console.log(progress(800, 200, 800) === -1);
console.log(progress(300, 200, 800) === 0);
console.log(progress(-200, 200, 800) === 1);

console.log(progress(400, 200, 400) === -1);
console.log(progress(100, 200, 400) === 0);
console.log(progress(-200, 200, 400) === 1);

console.log(progress(100, 400, 100) === -1);
console.log(progress(-150, 400, 100) === 0);
console.log(progress(-400, 400, 100) === 1);

console.log(progress(200, 400, 200) === -1);
console.log(progress(-100, 400, 200) === 0);
console.log(progress(-400, 400, 200) === 1);

console.log(progress(100, 100, 100) === -1);
console.log(progress(0, 100, 100) === 0);
console.log(progress(-100, 100, 100) === 1);
