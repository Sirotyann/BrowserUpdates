Safari supports Shared Workers from 16.0, which was released on 12/Sep/2022.

Shared Worker has a `onconnect` method. 
We can save tab instance while tab connecting to shared worker.
Then we are able to post message to all tabs later.
So we can share data between tabs by shared worker.