function encodeAndDecodeMessages() {
    let buttonsElement = document.querySelectorAll('button');

    Array.from(buttonsElement).forEach(button => {
        if (button.textContent == 'Encode and send it') {
            button.addEventListener('click', encode);
        } else {
            button.addEventListener('click', decode);
        }
    });

    function encode(e) {
        let textAreaElement = e.target.parentNode.querySelector('textarea');
        let newText = '';

        for (let char of textAreaElement.value) {
            newText += String.fromCharCode(char.charCodeAt(0) + 1);
        };

        let textAreaElementCoded = document.querySelector('div:nth-of-type(2) textarea');
        textAreaElementCoded.value = newText;
        textAreaElement.value = '';
    };

    function decode(e) {
        let textAreaElementCoded = document.querySelector('div:nth-of-type(2) textarea');
        let newText = '';

        for (let char of textAreaElementCoded.value) {
            newText += String.fromCharCode(char.charCodeAt(0) - 1);
        };

        textAreaElementCoded.value = newText;
    };
}