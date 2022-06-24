window.addEventListener('load', solution);

function solution() {
  let mainDiv = document.getElementById('block');

  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneElement = document.getElementById('phone');
  let adressElement = document.getElementById('address');
  let postCodeElement = document.getElementById('code');

  let submitBtnElement = document.getElementById('submitBTN');

  let infoUlElement = document.getElementById('infoPreview');

  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');

  submitBtnElement.addEventListener('click', (e) => {
    let info = {
      name: fullNameElement.value,
      mail: emailElement.value,
      phone: phoneElement.value,
      adress: adressElement.value,
      postCode: postCodeElement.value
    }

    if (fullNameElement.value != '' && emailElement.value != '') {
      let nameLiElement = create('li', `Full Name: ${fullNameElement.value}`, infoUlElement);
      let emailLiElement = create('li', `Email: ${emailElement.value}`, infoUlElement);
      let phoneLiElement = create('li', `Phone Number: ${phoneElement.value}`, infoUlElement);
      let adressLiElement = create('li', `Address: ${adressElement.value}`, infoUlElement);
      let postCodeLiElement = create('li', `Postal Code: ${postCodeElement.value}`, infoUlElement);

      clearInput();

      submitBtnElement.disabled = 'true';
      editBtn.removeAttribute('disabled');
      continueBtn.removeAttribute('disabled');
    }

    editBtn.addEventListener('click',(e)=>{
      infoUlElement.innerHTML = '';
      fullNameElement.value = info.name;
      emailElement.value = info.mail;
      phoneElement.value = info.phone;
      adressElement.value = info.adress;
      postCodeElement.value = info.postCode;

      submitBtnElement.removeAttribute('disabled');
      editBtn.setAttribute('disabled','true');
      continueBtn.setAttribute('disabled','true');
    })

    continueBtn.addEventListener('click',(e)=>{
      mainDiv.innerHTML = '';
      let h3El = create('h3','Thank you for your reservation!',mainDiv);
    })
  })

  function create(type, content, parent) {
    let element = document.createElement(type);

    if (content) {
      element.textContent = content;
    }

    if (parent) {
      parent.appendChild(element)
    }

    return element;
  }

  function clearInput() {
    fullNameElement.value = ''
    emailElement.value = ''
    phoneElement.value = ''
    adressElement.value = ''
    postCodeElement.value = ''
  }
}
