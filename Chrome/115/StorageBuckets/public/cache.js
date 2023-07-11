async function addToCache(url) {
    const cache = await caches.open("v1");
    fetch(url).then((response) => {
        console.log(response)
        if (!response.ok) {
            throw new TypeError("bad response status");
        }
        return cache.put(url, response);
    });
}

// const addResourcesToCache = async (resources) => {
//     const cache = await caches.open("v1");
//     await cache.addAll(resources);
// };

// self.addEventListener("activate", (event) => {
//     console.log("activate")
//     event.waitUntil(clients.claim());
//     console.log("document", document)
// });

self.addEventListener("install", (event) => {
    // const button = document.querySelector('#addToCacheButton')
    console.log("installed");
    addToCache('/data').then(resp => {
        console.log(".. added to cache ..")
    })
    // event.waitUntil(clients.claim());
    // event.waitUntil(
    //   addResourcesToCache([
    //     "/",
    //     "/index.html",
    //     "/style.css",
    //     "/app.js",
    //     "/image-list.js",
    //     "/star-wars-logo.jpg",
    //     "/gallery/bountyHunters.jpg",
    //     "/gallery/myLittleVader.jpg",
    //     "/gallery/snowTroopers.jpg",
    //   ])
    // );
});

console.log("hello cache")