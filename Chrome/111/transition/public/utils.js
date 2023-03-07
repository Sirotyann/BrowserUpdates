async function getPageContent(url) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}

function init() {
    navigation.addEventListener('navigate', (event) => {
        const toUrl = new URL(event.destination.url);
        console.log("Navigation to " + toUrl)
        event.intercept({
            handler: async function () {
                if (document.startViewTransition) {
                    document.startViewTransition(async () => {
                        const pageContent = await getPageContent(toUrl);
                        document.body.innerHTML = pageContent;
                    });
                } else {
                    location.href = event.destination.url;
                }
            }
        });
    });

}