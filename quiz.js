const doinfo = document.querySelector('.do')
const himinfo = document.querySelector('.him')
const anchorinfo = document.querySelector('.anchor')
const mouseinfo = document.querySelector('.mouse')
const quizinfo = document.querySelector('.quiz-container')
const hiinfo = document.querySelector('.hi')
const nextinfo = document.querySelector('.next')
const questioninfo = document.querySelector('.question')
const option1info = document.querySelector('.opt1')
const option2info = document.querySelector('.opt2')
const option3info = document.querySelector('.opt3')
const option4info = document.querySelector('.opt4')
doinfo.onclick = () => {
    himinfo.classList.add('active')
    mouseinfo.classList.add('active')
    
}
anchorinfo.onclick =()=>{
    himinfo.classList.remove('active')
    mouseinfo.classList.remove('active')
}
hiinfo.onclick =() =>{
    himinfo.classList.remove('active') 
    mouseinfo.classList.add('active')
    quizinfo.classList.add('active')
}
let theory = [
    {
        num:1,
        question:"what is html?",
        answer:"yes",
        option1:"1)london",
        option2:"2)paris",
        option3:"3)rome",
        option4:"4)gold"
    },
    {
        num:2,
        question:"what is css?",
        answer:"yes",
        option1:"1)yes",
        option2:"2)no",
        option3:"3)go",
        option4:"4)dont"
    },
    {
        num:3,
        question:"what is javascript?",
        answer:"yes",
        option1:"1)lang",
        option2:"2)for",
        option3:"3)back",
        option4:"4)peak"
    },
    {
        num:4,
        question:"what is python?",
        answer:"yes",
        option1:"1)snake",
        option2:"2)lang",
        option3:"3)back",
        option4:"4)guess"
    },
    {
        num:5,
        question:"what is java?",
        answer:"yes",
        option1:"1)cant",
        option2:"2)do you",
        option3:"3)u can",
        option4:"4)done"
    }
]

let count = 0;
nextinfo.onclick =()=>{
    count++;
    display(count);
}
function display(index){
    questioninfo.textContent=`${theory[index].num}.${theory[index].question}`;
    option1info.textcontent= `${theory[index].option1}`;
    option2info.textcontent= `${theory[index].option2}`;
    option3info.textcontent= `${theory[index].option3}`;
    option4info.textcontent= `${theory[index].option4}`;
}
