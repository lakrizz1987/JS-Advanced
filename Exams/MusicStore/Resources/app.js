window.addEventListener('load', solve);

function solve() {
    //TODO
    let genreElement = document.getElementById('genre');
    let nameElement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let dateElement = document.getElementById('date');

    let collectionContainerElement = document.querySelector('div.all-hits-container');
    let likeContainerElement = document.querySelector('div.likes p');
    let savedContainerElement = document.querySelector('div.saved-container');
    let totalLikes = 0;

    let addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', collectList);

    function collectList(e) {
        e.preventDefault();
        if (genreElement.value != '' && nameElement.value != '' && authorElement.value != '' && dateElement.value != '') {
            let divCollectionEl = create('div');
            divCollectionEl.classList.add('hits-info');
            let imgCollectionEl = create('img');
            imgCollectionEl.src = "./static/img/img.png";
            divCollectionEl.appendChild(imgCollectionEl);
            let h2CollectinGenreEl = create('h2', `Genre: ${genreElement.value}`, divCollectionEl);
            let h2CollectinNameEl = create('h2', `Name: ${nameElement.value}`, divCollectionEl);
            let h2CollectinAuthorEl = create('h2', `Author: ${authorElement.value}`, divCollectionEl);
            let h3DateEl = create('h3', `Date: ${dateElement.value}`, divCollectionEl);
            let btnSave = create('button', 'Save song', divCollectionEl);
            btnSave.classList.add('save-btn');
            let btnLike = create('button', 'Like song', divCollectionEl);
            btnLike.classList.add('like-btn');
            let btnDelete = create('button', 'Delete', divCollectionEl);
            btnDelete.classList.add('delete-btn');

            collectionContainerElement.appendChild(divCollectionEl);
            clear();

            btnLike.addEventListener('click',()=>{
                totalLikes++;
                likeContainerElement.textContent = `Total Likes: ${totalLikes}`;
                btnLike.disabled = true;
            });

            btnDelete.addEventListener('click',(e)=>{
                e.target.parentNode.remove();
            })

            btnSave.addEventListener('click',save);
        }
    }

    function create(type, content, parent) {
        let element = document.createElement(type);

        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }

    function clear() {
         genreElement.value = '';
         nameElement.value = ''; 
         authorElement.value = ''; 
         dateElement.value = '';
    }

    function save(e){
        let parent = e.target.parentNode;
        let cloneParent = parent.cloneNode(true);
        cloneParent.querySelector('button.like-btn').remove();
        cloneParent.querySelector('button.save-btn').remove();

        savedContainerElement.appendChild(cloneParent);
        parent.remove();

        let delBtn = cloneParent.querySelector('button.delete-btn');

        delBtn.addEventListener('click',(e)=>{
            e.target.parentNode.remove();
        })
    }
}