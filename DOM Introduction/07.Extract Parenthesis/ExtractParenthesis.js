function extract(content) {
    let textElement = document.getElementById('content');
    text = textElement.textContent;

    let pattern = /\(([^)]+)\)/g;
    let result = [];
    let matches = pattern.exec(text);
    result.push(matches[1]);
    while(matches != null){
        matches = pattern.exec(text);
        if(matches != null){
            result.push(matches[1]);
        }
       
    }
    return result.join('; ');
}