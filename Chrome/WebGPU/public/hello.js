

function print(txt) {
    document.querySelector('#board').innerHTML = txt;
}

if (!navigator.gpu) {
    print("WebGPU is not supported")
}

async function init() {
    if (!navigator.gpu) {
        throw Error("WebGPU not supported.");
    }

    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
        throw Error("Couldn't request WebGPU adapter.");
    }

    const device = await adapter.requestDevice();
    console.log({ adapter, device })
    adapter.features.forEach((f) => {
        console.log(f)
    })
    //...
}

init();