# Back/forward cache NotRestoredReason API
Back/forward cache (bfcache) is a browser optimization that enables instant back and forward navigation.
NotRestoredReason API will report the list of reasons why a page is not served from BFcache in a frame tree structure.

# status
- Start trail from Chrome 108
- Should turn on flag: `chrome://flags/#back-forward-cache`

# Iframe cannot use bfcache

# Reasons bfcache blocked
https://developer.chrome.com/docs/web-platform/bfcache-notrestoredreasons/ 