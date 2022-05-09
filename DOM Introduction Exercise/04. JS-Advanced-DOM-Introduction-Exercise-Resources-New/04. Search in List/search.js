function search() {
   let counter = 0;
   let searchedText = document.getElementById('searchText').value;
   let towns = document.querySelectorAll('#towns li');

   Array.from(towns).forEach(town => {
      if(town.textContent.toLowerCase().includes(searchedText.toLowerCase()) && searchedText != ''){
         counter++;
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
      }else{
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal';
      }
   });
   document.getElementById('result').textContent = `${counter} matches found`
}
