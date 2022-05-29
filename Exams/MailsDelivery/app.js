function solve() {
    let recipientNameElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let messageElement = document.getElementById('message');
    let [addButtonElement, resetButtonElement] = Array.from(document.querySelectorAll('div.addMails button'));

    let ulMailLIstElement = document.querySelector('div.list-mails ul');
    let sendMailsUlElement = document.querySelector('div.sent-mails ul');
    let TrashUlElement = document.querySelector('div.trash ul');

    addButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (recipientNameElement.value != '' && titleElement.value != '' && messageElement.value != '') {
            let liElement = document.createElement('li');

            let h4TitleElement = document.createElement('h4');
            h4TitleElement.textContent = `Title: ${titleElement.value}`;
            liElement.appendChild(h4TitleElement);

            let h4RecipientElement = document.createElement('h4');
            h4RecipientElement.textContent = `Recipient Name: ${recipientNameElement.value}`;
            liElement.appendChild(h4RecipientElement);

            let spanElement = document.createElement('span');
            spanElement.textContent = messageElement.value;
            liElement.appendChild(spanElement);

            let divElement = document.createElement('div');
            divElement.id = "list-action";

            let sendBtnElement = document.createElement('button');
            sendBtnElement.type = "submit"
            sendBtnElement.id = 'send';
            sendBtnElement.textContent = 'Send'
            divElement.appendChild(sendBtnElement);
            let deleteBtnElement = document.createElement('button');
            deleteBtnElement.type = "submit"
            deleteBtnElement.id = 'delete';
            deleteBtnElement.textContent = 'Delete'
            divElement.appendChild(deleteBtnElement);

            liElement.appendChild(divElement);
            ulMailLIstElement.appendChild(liElement);

            titleElement.value = '';
            recipientNameElement.value = '';
            messageElement.value = '';



            sendBtnElement.addEventListener('click', (e) => {
                let parentElelemt = e.target.parentNode.parentNode;
                let [_h4Title, _h4Reciepent] = Array.from(parentElelemt.querySelectorAll('h4'));
                let recipient = _h4Reciepent.textContent.split('Recipient Name: ')[1];
                let title = _h4Title.textContent.split('Title: ')[1]


                let liElementSend = document.createElement('li');
                let spanToElement = document.createElement('span');
                spanToElement.textContent = `To: ${recipient}`;
                liElementSend.appendChild(spanToElement);
                let spanTitleElement = document.createElement('span');
                spanTitleElement.textContent = `Title: ${title}`;
                liElementSend.appendChild(spanTitleElement);

                let divEl = document.createElement('div');
                divEl.classList.add('btn');
                let delBtn = document.createElement('button');
                delBtn.type = 'submit';
                delBtn.classList.add('delete');
                delBtn.textContent = 'Delete';
                divEl.appendChild(delBtn);
                liElementSend.appendChild(divEl);

                sendMailsUlElement.appendChild(liElementSend);
                parentElelemt.remove()

                delBtn.addEventListener('click', (e) => {
                    let parentElelemt = e.target.parentNode.parentNode;
                    let recipient_ = parentElelemt.querySelector('span').textContent;
                    let title_ = parentElelemt.querySelector('span:nth-of-type(2n)').textContent;

                    let _liEl1 = document.createElement('li');

                    let _spanToElement1 = document.createElement('span');
                    _spanToElement1.textContent = `${recipient_}`;
                    _liEl1.appendChild(_spanToElement1);

                    _spanTitleElement1 = document.createElement('span');
                    _spanTitleElement1.textContent = `${title_}`;
                    _liEl1.appendChild(_spanTitleElement1);

                    TrashUlElement.appendChild(_liEl1);
                    parentElelemt.remove();
                })
            })

            deleteBtnElement.addEventListener('click', (e) => {
                let parentElelemt = e.target.parentNode.parentNode;
                let [_h4Title, _h4Reciepent] = Array.from(parentElelemt.querySelectorAll('h4'));
                let recipient = _h4Reciepent.textContent.split('Recipient Name: ')[1];
                let title = _h4Title.textContent.split('Title: ')[1]

                let _liEl = document.createElement('li');

                let _spanToElement = document.createElement('span');
                _spanToElement.textContent = `To: ${recipient}`;
                _liEl.appendChild(_spanToElement);

                _spanTitleElement = document.createElement('span');
                _spanTitleElement.textContent = `Title: ${title}`;
                _liEl.appendChild(_spanTitleElement);

                TrashUlElement.appendChild(_liEl);
                parentElelemt.remove();
            })
        }

    })


    resetButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        titleElement.value = '';
        recipientNameElement.value = '';
        messageElement.value = '';
    })


}
solve()