function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rowElements = document.querySelectorAll('tbody tr');
   let searchElement = document.getElementById('searchField');
   function onClick() {
      //   TODO:
      for (const iterator of rowElements) {
         console.log(iterator.innerHTML)
      }

      for (let row of rowElements) {
         row.classList.remove('select');
         if (row.innerHTML.includes(searchElement.value) && searchElement.value != '') {
            row.className = 'select'
            
         }
      }
      searchElement.value = '';
   }
}