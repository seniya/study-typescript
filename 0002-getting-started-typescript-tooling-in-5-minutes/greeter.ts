export {};

function greeter(person: string) {
  return "Hello, " + person;
}

// const user = "Jane User";
const user = [1, 2, 3];

document.body.textContent = greeter(user);
