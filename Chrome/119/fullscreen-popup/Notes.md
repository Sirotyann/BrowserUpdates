# Doc
https://developer.chrome.com/blog/fullscreen-popups-origin-trial/

# What is it
It is gated behind window management permission.

Calling window.open with a third param: 
`window.open('https://example.com/popup.html', '_blank', 'top=0,fullscreen');`

Will popup a confirm box for permission