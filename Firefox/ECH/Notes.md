- Firefox version 118 introduces a significant security enhancement called Encrypted Client Hello (ECH).
  https://support.mozilla.org/en-US/kb/understand-encrypted-client-hello
  https://blog.mozilla.org/en/products/firefox/encrypted-hello/

ECH is launched on Chrome 117 and Edge 108.

Encrypted Client Hello (ECH):

Most online communication uses a Transport Layer Security (TLS) to encrypt users’ information and keep it safe. But the initial handshake is not protected.
With ECH, the initial “hello” message to a website becomes securely encrypted. Only the website user is visiting can decrypt it.

