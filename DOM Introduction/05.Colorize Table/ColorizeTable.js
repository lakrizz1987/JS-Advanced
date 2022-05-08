function colorize() {
    let trElements = document.querySelectorAll('tr:nth-of-type(2n)');
    Array.from(trElements).forEach(element => element.style.backgroundColor = 'teal');
}