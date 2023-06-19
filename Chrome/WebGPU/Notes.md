Currently, WebGPU allows you to create two types of pipelines: 
1. A Render Pipeline and a Compute Pipeline. As the name suggest, the Render Pipeline renders something, meaning it creates a 2D image. That image needn’t be on screen, but could just be rendered to memory. 
2. A Compute Pipeline is more generic in that it returns a buffer, which can contain any sort of data.

# flow
1. Request adapter and device
2. Create a shader module (with code of 'WebGPU Shading Language')
3. Create buffer by the device object from step 1
4. Call `device.createRenderPipeline` or `device.createComputePipeline` for rendering or computing.
5. Create `GPUCommandEncoder`, call `commandEncoder.beginRenderPass` or `commandEncoder.beginComputePass` to get a command encoder
6. Passing array of command buffers to command queue: `device.queue`