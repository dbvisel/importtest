const output = document.getElementById("output");
let outText = "<li>This text was added by main.js</li>";

const addition = await import("./imported.js").then(
  (module) => module.addition,
);
outText += addition;

output.innerHTML = outText;
