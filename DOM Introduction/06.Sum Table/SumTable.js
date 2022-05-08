function sumTable() {
    let pricesElements = document.querySelectorAll('td:nth-of-type(2)');
    let sum = Array.from(pricesElements).reduce((a, b) => {
        b = Number(b.textContent);
        if (b != NaN) {
            a += b
        }
        return a;
    }, 0);

    document.getElementById('sum').textContent = sum;
}