window.onload=function(){
  const question = document.getElementsByClassName('question');
  const answer = document.getElementsByClassName("answer");

  question[0].addEventListener('click', function(e){
    answer[0].classList.toggle('hide')
  })
  question[1].addEventListener('click', function(e){
    answer[1].classList.toggle('hide')
  })
  question[2].addEventListener('click', function(e){
    answer[2].classList.toggle('hide')
  })
}