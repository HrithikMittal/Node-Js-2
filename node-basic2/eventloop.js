const fs = require("fs");
const fileName = "target.txt";

// fs.watch(fileName, () => {
//   console.log(`File changed`);
// });

const data = fs.readFileSync(fileName);
console.log(data.toString());

// fs.readFile(fileName, (err, data) => {
//   if (err) {
//     console.log("Error is ", err.message);
//   }
//   console.log(data.toString());
// });

console.log("Node Js async programming ... ?");
