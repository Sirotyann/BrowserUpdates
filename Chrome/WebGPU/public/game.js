const canvas = document.querySelector("canvas");

// WebGPU device initialization
if (!navigator.gpu) {
    alert("WebGPU not supported on this browser.");
    throw new Error("WebGPU not supported on this browser.");
}

// get adapter - You can think of an adapter as WebGPU's representation of a specific piece of GPU hardware in your device.
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
    throw new Error("No appropriate GPUAdapter found.");
}

// get device
const device = await adapter.requestDevice();

// Canvas configuration
const context = canvas.getContext("webgpu");
const canvasFormat = navigator.gpu.getPreferredCanvasFormat();
context.configure({
    device: device,
    format: canvasFormat,
});