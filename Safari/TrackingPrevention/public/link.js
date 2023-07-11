class BeaconLink extends HTMLElement {
    constructor(props){
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.append(BeaconLink.build());

        this.internals = this.attachInternals();
        this.element = this.shadow.querySelector('a');
        console.log("BeaconLink build", props)

        this.element.addEventListener('click', () => {
            navigator.sendBeacon('/beacon', 'beacon api message from BeaconLink');
        });
    }

    static get observedAttributes () {
        return [ 'href', 'target' ];
    }

    static build () {
        const template = document.createElement('template');
        template.innerHTML = `<a><slot></slot></a>`;
        return template.content.cloneNode(true);
    }

    attributeChangedCallback (name, oldVal, newVal) {
        this[name] = newVal;
        this[name] !== null && this.element.setAttribute(name, newVal);
    }
}

customElements.define('beacon-a', BeaconLink);
