# What is FedCM
- FedCM stands for "Federated Credential Management API". https://developer.chrome.com/en/docs/privacy-sandbox/fedcm/
- FedCM is a Web Platform API that allows users to login to websites with their federated accounts in a privacy preserving manner.
- FedCM is one of the Privacy Sandbox proposals.
- Doc: https://fedidcg.github.io/FedCM/  https://developer.chrome.com/en/docs/privacy-sandbox/fedcm/ 
- Demo: https://fedcm-rp-demo.glitch.me/

# Whe we need FedCM

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

# Adds cross-origin iframe support for the FedCM API via a permissions policy.
-