function editElement(element, match, replacer) {
    // Solution Regex
   // let pattern = new RegExp(match,'g');
   // element.textContent = element.textContent.replace(pattern,replacer);

   while(element.textContent.includes(match)){
       element.textContent = element.textContent.replace(match,replacer);
   }
}