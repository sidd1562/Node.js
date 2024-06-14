const { log } = require("console");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("WaterFull", () => {
  console.log("Please turn off the motor");
  setTimeout(() => {
    console.log("Please turn off the motor");
  }, 3000);
});

console.log("this script is running");
myEmitter.emit("WaterFull");

console.log("this script is running Please turn off the motor");