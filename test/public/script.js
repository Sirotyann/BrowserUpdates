function proxy() {
    document.addEventListener('click', (evt) => {
        console.log(evt.target);
        if(evt.target.tagName === 'A') {
            confirm(evt.target.getAttribute('href'));
            evt.preventDefault();
        }
    });
}

function confirm(url) {
    if(window.confirm("Leave or stay")) {
        window.location.href = url;
    }
}

proxy();