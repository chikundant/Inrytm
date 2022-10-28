
const question = document.getElementsByClassName('question');
const answer = document.getElementsByClassName("answer");

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
      alert(result.message);
      //formPreview.innerHtml = '';
      form.reset();

      form.classList.remove('_sending')
    } 
    else{
      alert("Помилка!")
      form.classList.remove('_sending')
      form.reset();
    }
	
  }
});