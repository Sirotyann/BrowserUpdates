self.onmessage = function(message) {
    console.log(message.data);
    const sum = Math.pow(parseInt(message.data, 10), 2);
    const workerResult = `Result: ${sum}`;
    postMessage(workerResult);
}