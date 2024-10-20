class socialsComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <ul class="socials">
            <li>
                <a href="https://github.com/danielharnden" aria-label="GitHub" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/bchiang7" aria-label="Linkedin" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
                        <title>LinkedIn</title>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
            </li>
        </ul>
        `;
    }
}



class emailComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="email">
            <a class="email" href="mailto:danielharndengames@gmail.com">danielharndengames@gmail.com</a>
        </div>
        `;
    }
}



class returnComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const to = this.getAttribute('to');
        this.innerHTML = `
        <div class="return">
            <a class="return" href="index.html#${to}">Return to Portfolio</a>
        </div>
        `;
    }
}

customElements.define('email-component', emailComponent);
customElements.define('socials-component', socialsComponent);
customElements.define('return-component', returnComponent);



const divs = document.getElementsByClassName('fadeDiv');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    // Calculate the full height of the element
    const elementHeight = Math.max(element.offsetHeight, element.scrollHeight);
  
    // Check if the element is fully within the viewport boundaries
    const topVisible = rect.top >= 0 && rect.top + elementHeight <= windowHeight;
    const bottomVisible = rect.bottom >= 0 && rect.bottom - elementHeight <= windowHeight;
    const leftVisible = rect.left >= 0 && rect.left + element.offsetWidth <= windowWidth;
    const rightVisible = rect.right >= 0 && rect.right - element.offsetWidth <= windowWidth;
  
    // Return true if the element is fully visible within the viewport
    return (topVisible || bottomVisible) && leftVisible && rightVisible;
  }

function fadeInOnScroll() {
    for (let i = 0; i < divs.length; i++) {
        if (isInViewport(divs[i])) {
            if (!divs[i].classList.contains('fadeIn')) {
                divs[i].classList.remove('fadeOut');
                divs[i].classList.add('fadeIn');
            }
        } else {
            if (!divs[i].classList.contains('fadeOut')) {
                divs[i].classList.remove('fadeIn');
                divs[i].classList.add('fadeOut');
            }
        }
    }
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);