import { useState } from 'react';
import './App.css';
export default function App() {
  //tech related ques

const quizQues3=[
  {
    question:" What is the name of the mascot for the 2023 FIFA Women’s World Cup?",
    options:[
      {answer:"Tazuni",correct:'true'},
      {answer:"Tiger",correct:'false'},
      {answer:"Nenya",correct:'false'},
      {answer:"Kappu",correct:'false'},
    ]
  },
  {
    question:". Which country has won the most world cup titles?",
    options:[
      {answer:"Italy",correct:'false'},
      {answer:"Brazil",correct:'true'},
      {answer:"Argentina",correct:'false'},
      {answer:"Portugal",correct:'false'},
    ]
  },
  {
    question:"How many times has Messi won the FIFA World Cup?",
    options:[
      {answer:"2",correct:'false'},
      {answer:"3",correct:'false'},
      {answer:"1",correct:'true'},
      {answer:"0",correct:'false'},
    ]
  },
  {
    question:" In what year was the World Cup first broadcast on TV?",
    options:[
      {answer:"1952",correct:'false'},
      {answer:"1953",correct:'false'},
      {answer:"1954",correct:'true'},
      {answer:"1955",correct:'false'},
    ]
  },
  {
    question:"Who is the winner of the 2018 FIFA world cup?",
    options:[
      {answer:"France",correct:'true'},
      {answer:"Belgium",correct:'false'},
      {answer:"Portugal",correct:'false'},
      {answer:"Argentina",correct:'false'},
    ]
  },
]
const [currentQuestion,setCurrentQuestion]=useState(0);
const [showScore,setShowScore]=useState(false);
const [score,setScore]=useState(0);

const handleAnsOpionClick=(correct)=>{
  if(correct){
    setScore(score + 1);
  }
  const nextQuestion=currentQuestion + 1;
  if(nextQuestion < quizQues3.length){
    setCurrentQuestion(nextQuestion);
  }else{
    setShowScore(true);
  }
};
  return (
    <>
   
        
       <div className='app'>
        {
          showScore ? (
            <div className="score-section">
              You scored {score} out of {quizQues3.length*2}
              </div>
          ) : (
            <>
             <div className='question-section'>
              <div className='question-count'>
                <span>Question{currentQuestion + 1}</span>/{quizQues3.length}
                </div>
                <div className='question-text'>{quizQues3[currentQuestion].question}
                </div>
                </div>
                <div className='answer-section'>
                  {quizQues3[currentQuestion].options.map((options)=>(
                    <button onClick={()=>handleAnsOpionClick(options.correct)}>{options.answer}</button>
                  ))}
              </div>
            
            </>
          )
          
        }
       </div>
        </>
        )
  }
