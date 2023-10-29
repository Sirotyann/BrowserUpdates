#
Client hints are a set of HTTP request header fields that a server can proactively request from a client to get information about the device, network, user, and user-agent-specific preferences.
A new client hint (Sec-CH-Prefers-Reduced-Transparency) would be released at Chrome 118.
It probably could be used for fingerprinting.

# 
Looks like it doesn't work.
Waiting for Chrome 119 beta.

https://web.dev/user-preference-media-features-headers/


#
Client Hint	                            Allowed Values	                                Supported by browser
---------------------------------------------------------------------------------------------------------------
Sec-CH-Prefers-Reduced-Motion	        no-preference, reduce	                        Chrome/Edge
Sec-CH-Prefers-Color-Scheme	            light, dark	prefers-color-scheme                Chrome/Edge
Sec-CH-Prefers-Reduced-Transparency	    no-preference, reduce	                        Chrome 119/Edge 119
Sec-CH-Prefers-Contrast	                no-preference, less, more, custom	
Sec-CH-Forced-Colors	                active, none	forced-colors
Sec-CH-Prefers-Reduced-Data	            no-preference, reduce	prefers-reduced-data