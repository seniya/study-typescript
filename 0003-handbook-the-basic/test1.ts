export {};

const message = "hello!";

message();

const user = {
  name: "Daniel",
  age: 26,
};
user.location; // undefined 를 반환

function flipCoin() {
  // 본래 의도는 Math.random()
  return Math.random < 0.5;
}

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // 이런, 이 블록은 실행되지 않겠군요
}

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", Date());
