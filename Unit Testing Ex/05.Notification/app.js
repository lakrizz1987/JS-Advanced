function notify(message) {
  let divNotificationElement = document.getElementById('notification');
  divNotificationElement.textContent = message;


  divNotificationElement.style.display = 'block';

  divNotificationElement.addEventListener('click',(e)=>{
    console.log(e.target.style.display = 'none')
  })

}