window.addEventListener("load", solve);

function solve() {
  let titleElement = document.getElementById('post-title');
  let categoryElement = document.getElementById('post-category');
  let contentElement = document.getElementById('post-content');

  let publishBtnElement = document.getElementById('publish-btn');
  let ulRewiewElement = document.getElementById('review-list');
  let publishedListElement = document.getElementById('published-list')

  publishBtnElement.addEventListener('click', () => {

    if (titleElement.value != '' && categoryElement.value != '' && contentElement.value != '') {
      let liElement = document.createElement('li');
      liElement.classList.add('rpost');
      let articleElement = document.createElement('article');
      let h4Element = document.createElement('h4');
      h4Element.textContent = titleElement.value;
      articleElement.appendChild(h4Element);
      let pCategoryElement = document.createElement('p');
      pCategoryElement.textContent = `Category: ${categoryElement.value}`
      articleElement.appendChild(pCategoryElement);
      let pContentElement = document.createElement('p');
      pContentElement.textContent = `Content: ${contentElement.value}`
      articleElement.appendChild(pContentElement);

      liElement.appendChild(articleElement);
      

      let btnEditElement = document.createElement('button');
      btnEditElement.textContent = 'Edit';
      btnEditElement.classList.add('action-btn');
      btnEditElement.classList.add('edit');
      liElement.appendChild(btnEditElement);

      let btnApproveElement = document.createElement('button');
      btnApproveElement.textContent = 'Approve';
      btnApproveElement.classList.add('action-btn');
      btnApproveElement.classList.add('approve');
      liElement.appendChild(btnApproveElement);

      ulRewiewElement.appendChild(liElement);
      
      let obj = {
        title:titleElement.value,
        category:categoryElement.value,
        content:contentElement.value
      }

      titleElement.value = '';
      contentElement.value = '';
      categoryElement.value = '';

      btnEditElement.addEventListener('click',(e)=>{
        titleElement.value = obj.title;
        categoryElement.value = obj.category
        contentElement.value = obj.content
        liElement.remove();
      })

      btnApproveElement.addEventListener('click',(e)=>{
        
        liElement.removeChild(btnApproveElement)
        liElement.removeChild(btnEditElement)
        let clonedLi = liElement.cloneNode(true);
        liElement.remove();
        
        publishedListElement.appendChild(clonedLi);
        
      })

      document.getElementById('clear-btn').addEventListener('click',(e)=>{
        let divEl = e.target.parentNode;
        let liEl = divEl.querySelector('ul li')
        liEl.remove();
      })

    }

    
  })
  
}
