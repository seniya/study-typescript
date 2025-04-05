// 아래 코드에는 타입 표기가 전혀 없지만, TypeScript는 버그를 감지할 수 있습니다.
const names = ["Alice", "Bob", "Eve"];

// 함수에 대한 문맥적 타입 부여
names.forEach(function (s) {
  console.log(s.toUppercase());
});

// 화살표 함수에도 문맥적 타입 부여는 적용됩니다
names.forEach((s) => {
  console.log(s.toUppercase());
});

// 객체 타입 (Object Types)
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// 옵셔널 프로퍼티 (Optional Properties)
function printName(obj: { first: string; last?: string }) {
  // ...
}
// 둘 다 OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
