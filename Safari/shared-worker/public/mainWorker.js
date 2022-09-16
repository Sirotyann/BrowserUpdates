const worker = new Worker('worker.js');

const num = document.getElementById("number");
const btn = document.getElementById("square");
const result = document.getElementById("result");

btn.onclick = () => {
    console.log("Post Message ", num.value);
    worker.postMessage(num.value);
};

worker.onmessage = e => {
    console.log("# worker onmessage", e);
    result.textContent = e.data;
};