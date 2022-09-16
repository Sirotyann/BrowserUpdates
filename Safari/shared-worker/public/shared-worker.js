const tabs = [];

onconnect = function (event) {
    const port = event.ports[0];
    tabs.push(port);

    console.log(" @ shared work connected", port)

    port.onmessage = function (e) {
        console.log(" @ shared work onmessage", e)
        const sum = Math.pow(parseInt(e.data, 10), 2);
        const workerResult = `Result: ${sum}`;
        // port.postMessage(workerResult);
        postMessage(workerResult);
    };
};

function postMessage(message) {
    tabs.forEach(tab => {
      tab.postMessage(message);
    });
  }
  
