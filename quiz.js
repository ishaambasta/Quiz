const quizJSON = [
{ 
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question: "How many pieces of bun are in Mcdonald's Big Mac?",
},

{
    correctAnswer: 'Paris',
    options: ['London', 'Paris', 'Rome', 'Berlin'],
    question: "What is the capital of France?",
},

{
    correctAnswer: 'L.Frank Baum',
    options: ['L.Frank Baum', 'J.K.Rowling', 'C.S.Lewis', 'Roald Dahl'],
    question: "Who is the author of the book 'The Wonderful Wizard of Oz'?",
},

{
    correctAnswer: 'Mercury',
    options: ['Venus', 'Earth', 'Mars', 'Mercury'],
    question: "Which planet is closest to the Sun?",
}, 

{
    correctAnswer: 'Leonardo da Vinci',
    options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    question: "Who painted the Mona Lisa?",
}, 
  {
    correctAnswer: 'Lightning',
    options: ['Sound', 'Light', 'Wind', 'Lightning'],
    question: "What is hotter than the surface of the Sun?",
},

{
    correctAnswer: 'Honey',
    options: ['Milk', 'Bread', 'Honey', 'Rice'],
    question: "Which food never spoils?",
},
];


let score= 0; 
let currentQuestion = 0; 
const totalScore = quizJSON.length;

//Accessing all elements from the DOM
const questionEl = document.getElementById('question');  
const optionEL = document.getElementById('options'); 
const scoreEl = document.getElementById('score');
const nextEL = document.getElementById('next');

showQuestion();
nextEL.addEventListener("click", ()=>{
    scoreEl.textContent = `Score: ${score} / ${totalScore}`;
    nextQuestion();
});


function showQuestion() {
//Destructing 
const {
    correctAnswer, options, question
} = quizJSON[currentQuestion];  

//setting Question text content 
questionEl.textContent = question;

const shuffledOptions = shuffleOptions(options);

//options 
shuffledOptions.forEach((opt) =>{
    const button = document.createElement("button");
    button.textContent = opt; 
    optionEL.appendChild(button);
    
    button.addEventListener("click", ()=>{
        if(opt === correctAnswer){
        score ++;
        
    }
        else{
            score = score -0.25;
        }
    
       scoreEl.textContent = `Score: ${score} / ${totalScore}`;

   nextQuestion();
    });

});
}

//Function to move to the next question
function nextQuestion(){
    currentQuestion++;
    optionEL.textContent = '';
    if(currentQuestion >= quizJSON.length){
         questionEl.textContent = 'Quiz completed!';
         nextEL.remove();
  
    }
    else{
        showQuestion();
    }


}



//Shuffling the options
function shuffleOptions(options){
    for(let i= options.length -1; i>0; i--){
        const j= Math.floor(Math.random() * (i +1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}

