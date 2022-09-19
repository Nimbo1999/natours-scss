for(const element of document.getElementsByTagName('a')) {
    element.addEventListener('click', event => {
        if (event.target.hash && !!document.querySelector(event.target.hash)) {
            /**
             * @type {HTMLElement}
             */
            const element = document.querySelector(event.target.hash);
            window.scrollTo({ behavior: 'smooth', top: element.offsetTop});
        }
    });
}

for(const element of document.getElementsByTagName('form')) {
    element.addEventListener('submit', event => {
        event.preventDefault();
    });
}
