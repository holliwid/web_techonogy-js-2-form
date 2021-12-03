function alertAnswers(){
    const answerRecive = document.querySelector('input[name="answer"]:checked').value 
    var sect = document.getElementById('theme_of_question')
    var sect_answear = sect.options[sect.selectedIndex].text
    let checkedBox = document.querySelectorAll('.checkbox:checked');
    res = ''
    for (checked_checkbox of checkedBox){
        res += checked_checkbox.value + " "
    }
    const your_name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone_number = document.getElementById('humber_of_phone').value
    const question = document.getElementById('question').value 
    alert(
        `       Как Вам удобно получатить ответ: ${answerRecive}\n
        Тема вопроса: ${sect_answear}\n
        И ещё один вопрос: ${res}\n
        Имя: ${your_name}\n
        email: ${email}\n
        phone number: ${phone_number}\n
        Вопрос: ${question
        }`)
}