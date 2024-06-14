const { log } = require("console");
const fs = require("fs");

// fs.readFile("file.txt", "utf-8", (error, data) => {
//   console.log(error, data);                          // second run
// });

console.log("End File Close"); // first run

// const s = fs.readFileSync("file.txt");
// console.log(s.toString());

// const r = fs.writeFile("file2.txt", "this is file 2",()=>{
//     console.log("Written to me my file");
// });

const w = fs.writeFileSync("file2.txt", "this is a data2 my name sidd")
  console.log(w)

console.log("End last"); // first run
