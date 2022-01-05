const input = document.querySelector("[type = text]");
const save = document.querySelector("#save");
const nodeList = document.querySelector(".nodes");

let m = ["C4", "E4", "B4", "C4", "E4", "B4", "C4", "E4", "B4"];
let nodeMemory = [];
let currentNode = [];

function run(a) {
  const audio = new Audio(`sound/${a}.mp3`);
  audio.play();
  input.value += " " + a + " ";
  console.log(input.value);
}

function forReRun(a) {
  const audio = new Audio(`sound/${a}.mp3`);
  audio.play();
  console.log(input.value);
}

function reRun(node, delay = 500) {
  let x = delay;
  node.map((el) => {
    setTimeout(() => {
      forReRun(el);
    }, x);
    x += delay;
  });
  input.value = " ";
}

function saveNode() {
  const li = document.createElement("li");
  li.append(input.value);
  nodeList.append(li);
  input.value = " ";
}

nodeList.addEventListener("click", function (e) {
  let tap = e.target;
  let tempo = Number(prompt("Enter temp"));
  currentNode.push(tap.innerText.split(" "));

  reRun(currentNode[currentNode.length - 1], tempo);
  console.log(currentNode);
});

document.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "KeyA":
      run("C4");
      break;
    case "KeyS":
      run("D4");
      break;
    case "KeyD":
      run("E4");
      break;
    case "KeyF":
      run("F4");
      break;
    case "KeyJ":
      run("G4");
      break;
    case "KeyK":
      run("A4");
      break;
    case "KeyL":
      run("B4");
      break;
    case "Semicolon":
      run("C5");
      break;
    case "Enter":
      saveNode();
      break;

    default:
      console.log("Wrong key press");
  }
});
