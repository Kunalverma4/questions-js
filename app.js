

// const questions = document.querySelectorAll('.question');

// questions.forEach(function(question){

// const btn = question.querySelector('.question-btn');

// btn.addEventListener('click',function(){
// questions.forEach(function(e){
// if(e !== question){
//     e.classList.remove('show-text')
// }
// })   
// question.classList.toggle('show-text');
// })
// })








const btns = document.querySelectorAll('.question-btn');
const main = document.querySelectorAll('.question')
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')
        main.forEach(function(ques){
            if(ques !== question){
                    ques.classList.remove('show-text')
            }
        })

    })
})