
function ticketDatabase(arr, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    arr.forEach(line => {
        let [dest, pr, st] = line.split('|');
        pr = Number(pr)
        result.push(new Ticket(dest, pr, st));
    })
    criteria == 'price' ? result.sort((a, b) => a[criteria] - b[criteria]) : 
    result.sort((a, b) => a[criteria].localeCompare(b[criteria]));

    return result;

}

ticketDatabase(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'destination')