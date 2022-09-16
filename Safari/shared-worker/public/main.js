
const num = document.getElementById("number");
const btn = document.getElementById("square");
const result = document.getElementById("result");

const sharedWorker = new SharedWorker("/shared-worker.js");
sharedWorker.port.start();

console.log("# sharedWorker", sharedWorker);

btn.onclick = () => {
    console.log("# Post Message ", num.value);
    sharedWorker.port.postMessage(num.value);
};

sharedWorker.port.onmessage = e => {
    console.log("# onmessage", e);
    result.textContent = e.data;
};