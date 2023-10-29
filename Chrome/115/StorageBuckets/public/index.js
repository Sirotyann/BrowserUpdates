let draftsBucket;
let myCache;
let draftsDb;

async function init() {
    draftsBucket = await navigator.storageBuckets.open("draft", { durability: "strict", persisted: true });

    if (await draftsBucket.persisted() !== true) {
        console.log("Your drafts may be lost if you run out of disk space!");
    }

    // myCache = await inboxBucket.caches.open('my_cache');
    draftsDb = await new Promise(resolve => {
        console.log("draftsBucket", {draftsBucket})
        const request = draftsBucket.indexedDB.open("myDraft");
        request.onupgradeneeded = () => {
            const db = request.result;
            console.log('onupgradeneeded', {db});
            const store = db.createObjectStore("books", { keyPath: "isbn" });
            console.log("create store", {store})
            // const titleIndex = store.createIndex("by_title", "title", { unique: true });
            // const authorIndex = store.createIndex("by_author", "author");

            // Populate with initial data.
            store.put({ title: "Quarry Memories", author: "Fred", isbn: 123456 });
            store.put({ title: "Water Buffaloes", author: "Fred", isbn: 234567 });
            store.put({ title: "Bedrock Nights", author: "Barney", isbn: 345678 });
            console.log("push data to store", {store})
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    }).then(result => {
        console.log("success", result);
    }).error(err => {
        console.log("err", err);
    });
}

function readData(){
    const transaction = db.transaction(["customers"], "readwrite");
}

// init();
async function destroy() {
    await navigator.storageBuckets.delete("draft");
    console.log("draft db deleted")
}