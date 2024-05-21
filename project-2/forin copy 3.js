const objectLoop = require("./module.objectLoop.js");
const data = require("./data.obj.js");

function forObject(a, b) {
  try {
    if (typeof a === "object") {
      if (typeof b === "object") {
        let values = [];

        objectLoop(values, a);
        objectLoop(values, b);

        console.log(values);
        let add = values.reduce((a, b) => {
          return a + b;
        });
        console.log("다 더한값 : ", add);
      }
    }
  } catch (error) {
    console.log(error);
    console.log("안됨요");
  }
}

module.exports = someData;
forObject(data.a, data.b);
