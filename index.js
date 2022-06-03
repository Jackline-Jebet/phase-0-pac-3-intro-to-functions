// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
}
sayHello();
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }

  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything"); // passing the argument 'anything' into our function

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  function add(x, y) {
      return x + y;
  }

  console.log(add(1, 2));
  const sum = add(num1,num2);
  const message = 'The sum of your number is : ${ada(num1, num2)}.';

  //return both and log a string in our say() function
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner")); //return value logged coz return ends an execution inside the function, nothing after return will be executed

  //switch the order to both log and return
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  //my own function that returns something
  function say(greeting, firstName){
      console.log("I am called!");
      return '${greeting}, ${firstName}!';
  }
