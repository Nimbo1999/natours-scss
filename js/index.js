for(const element of document.getElementsByTagName('a')) {
    element.addEventListener('click', event => event.preventDefault());
}