# Intro
This feature is shipped at Chrome 108

# What is it
By setting 'Sec-CH-Prefers-Color-Scheme' header as a Critical Client Hint. 
Chrome would send a second request immediately, with a "sec-ch-prefers-color-scheme" in request header.
Server can tell if Chrome is in dark theme or light theme by this header, and send different response.(dark.css/light.css)

# How to switch Chrome dark/light theme
Windows settings -> Personalization -> Colors -> Choose your default app mode

# How to turn on Chrome reduced motion
Windows settings > Ease of Access > Display > Show animations in Windows.

# Chat is reduced motion
When checked reduced motion, these preferences cause the operating system to not use decorative effects like app launching animations. Applications themselves can and should honor this setting, too, and remove all unnecessary animations.

# Reference
https://web.dev/user-preference-media-features-headers/