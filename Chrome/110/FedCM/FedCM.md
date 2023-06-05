# What is FedCM
- FedCM stands for "Federated Credential Management API". https://developer.chrome.com/en/docs/privacy-sandbox/fedcm/
- FedCM is a Web Platform API that allows users to login to websites with their federated accounts in a privacy preserving manner.
- FedCM is one of the Privacy Sandbox proposals.
- Doc: https://fedidcg.github.io/FedCM/  https://developer.chrome.com/en/docs/privacy-sandbox/fedcm/ 
- Demo: https://fedcm-rp-demo.glitch.me/

# Why we need FedCM

## Identity federation
- Identity federation delegates authentication or authorization of an individual (user or entity) to a trusted external party (an identity provider or IdP). The identity provider then allows the individual to sign in to a website (a relying party or RP).

## Identify federation problems
- The mechanisms that identity federation has relied on (iframes, redirects and cookies) are actively being abused to track users across the web. 
- Identity federation and tracking is hard to differentiate.

## FedCM is the solution
- FedCM provides a use-case-specific abstraction for federated identity flows on the web.
- FedCM expose a browser dialog that allows users to choose accounts from IdPs to login to websites.

# What is Federated Credential
- Federated identity allows authorized users to access multiple applications and domains using a single set of credentials.

# Concepts
- RP: Relying Party (website that requests user information for federated sign in) 
- IDP : Identity Provider (website that provides user information for federated sign in)

# How to test
- Block third-party cookies: chrome://settings/cookies 
- Enable FedCM without thrid-party cookies: chrome://flags/#fedcm-without-third-party-cookies

# What next
New features will be added to FedCM, including cross-origin iframe support.
The roadmap can be found on https://developer.chrome.com/en/docs/privacy-sandbox/fedcm/#roadmap.
Now RP can't keep login status, but there are several proposals related: https://github.com/privacycg/is-logged-in.