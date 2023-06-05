# Doc
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Clear-Site-Data

# What is it
The Clear-Site-Data header clears browsing data (cookies, storage, cache) associated with the requesting website. It allows web developers to have more control over the data stored by a client browser for their origins.
This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

# The demo
visit https://localhost:8443/ 
click "Add cookie", a random value cookie will be added
visit https://localhost:8443/clear by clicking "Clear Cookie" link

# Supporting browsers
Chrome Edge, will be support by Safari 16.4
Not supported by Firefox