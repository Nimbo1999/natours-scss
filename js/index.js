for(const element of document.getElementsByTagName('a')) {
    element.addEventListener('click', event => event.preventDefault());
}

for(const element of document.getElementsByTagName('form')) {
    element.addEventListener('submit', event => {
        event.preventDefault();
        console.log({ target: event.target });
    });
}
