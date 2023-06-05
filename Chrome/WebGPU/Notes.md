Currently, WebGPU allows you to create two types of pipelines: 
1. A Render Pipeline and a Compute Pipeline. As the name suggest, the Render Pipeline renders something, meaning it creates a 2D image. That image needn’t be on screen, but could just be rendered to memory. 
2. A Compute Pipeline is more generic in that it returns a buffer, which can contain any sort of data.