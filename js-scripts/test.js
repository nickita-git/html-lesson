var test = [{question: "Назовите год независимости США:", variants: ['1776г', '1737г', '1805г', '1822г']},
            {question: "Выберите год завершения Реконкисты в Испании:", variants: ['1439г', '1492г', '1131г', '1593г']},
            {question: "Сколько всего было крестовых походов?", variants: ['6', '9', '11', '15']},
            {question: "Выберите верное утверждение:", variants: ['Столетняя война длилась 101 год', 'Германия лишилась своих последних колоний после окончания Франко-прусской войны 1871 года',
            'Все Русско-турецкие войны были выйграны Российской империей/Русским царством', 'Вторая мировая война закончилась 2 сентября 1945 года']}]

var correct = [0, 1, 1, 3];

const QUESTION_COUNT = 4;
var question_number = 0;
var result = 0;
var general_block = document.getElementById('general_block');
var question_block = document.getElementById('question_block');
var ans_block = document.getElementById('answers_block');
var start = 0;

function give_answer()
{
    console.log(question_number);
    var index = this.index;
    if (index == correct[question_number])
        result++;
    question_number++;
    if (question_number == 4)
    {
        general_block.innerHTML = "<h3>Ваш результат: " + result + "</h3>\n <input id=anew type='button' value='пройти тест заново' onclick='reload()'>";
        question_number = 0;
        result = 0;
    }
    get_question();
}

function reload(){
    location.reload();
}

function get_question()
{
    question_block.firstElementChild.innerHTML = test[question_number].question;
    for (var i = 0; i < ans_block.children.length; i++)
    {
        ans_block.children[i].innerHTML = test[question_number].variants[i];
    }
}

for (var i = 0; i < 4; i++)
{
    var variant = document.createElement('div');
    variant.classList.add('variant');
    variant.addEventListener('click', give_answer);
    variant.index = i;
    ans_block.appendChild(variant);
}

get_question();


