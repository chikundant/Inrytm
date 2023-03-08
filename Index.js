
const question = document.getElementsByClassName('question');
const answer = document.getElementsByClassName("answer");
const burger = document.getElementsByClassName('header-burger')
const header_menu = document.getElementsByClassName('header-menu')
const header_item = document.querySelectorAll('menu-item')
const body = document.getElementsByTagName('body')


question[0].addEventListener('click', function (e) {
  answer[0].classList.toggle('hide')
})
question[1].addEventListener('click', function (e) {
  answer[1].classList.toggle('hide')
})
question[2].addEventListener('click', function (e) {
  answer[2].classList.toggle('hide')
})
question[3].addEventListener('click', function (e) {
  answer[3].classList.toggle('hide')
})
question[4].addEventListener('click', function (e) {
  answer[4].classList.toggle('hide')
})
question[5].addEventListener('click', function (e) {
  answer[5].classList.toggle('hide')
})
question[6].addEventListener('click', function (e) {
  answer[6].classList.toggle('hide')
})
question[7].addEventListener('click', function (e) {
  answer[7].classList.toggle('hide')
})

document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('form');
  const modal = document.getElementsByClassName('modal')
  
  form.addEventListener('submit', formSend);

  async function formSend(e){

    e.preventDefault();

    let formData = new FormData(form)

    form.classList.add('_sending');
    formData.append('test', 'qwe')

    let response = await fetch('sendmail.php',{
      method: 'POST',
      body: formData
    });

    if (response.ok){
      let result = await response.json();
      console.log(result.message);
      //formPreview.innerHtml = '';
      form.reset();

      form.classList.remove('_sending')
      form.classList.add('_sent')
      setTimeout(() => {
        form.classList.remove('_sent')
      },"2000")
    } 
    else{
      alert("Помилка!")
      form.classList.remove('_sending')
      form.reset();

      form.classList.add('_error')
      setTimeout(() => {
        form.classList.remove('_error')
      },"2000")

    }
	
  }
});

burger[0].addEventListener('click', function (e) {
  burger[0].classList.toggle('active')
  header_menu[0].classList.toggle('active')
  body[0].classList.toggle('lock')
})

header_menu[0].addEventListener('click', function(e) {
  burger[0].classList.toggle('active')
  header_menu[0].classList.toggle('active') 
  body[0].classList.toggle('lock')
}); 