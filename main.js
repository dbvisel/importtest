const output = document.getElementById("output");
let outText = "This text was added by main.js";

const addition = await import("./imported.js").then(
  (module) => module.addition,
);
outText += "<br>" + addition;

output.innerHTML = outText;
