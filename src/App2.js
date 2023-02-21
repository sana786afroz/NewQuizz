import './App.css';
import { useState } from 'react';
export default function App() {
 
const quizQues2=[
  {
    question:"Where is the main Republic Day parade held in India?",
    options:[
      {answer:"New Delhi",correct:'true'},
      {answer:"Mumbai",correct:'false'},
      {answer:"Kolkata",correct:'false'},
      {answer:"Chennai",correct:'false'},
    ]
  },
  {
    question:"Who designed the national flag of India?",
    options:[
      {answer:"Mahatma Gandhi",correct:'false'},
      {answer:"Jawaharlal Nehru",correct:'false'},
      {answer:"Sardar Patel",correct:'false'},
      {answer:"Pingali Venkayya",correct:'true'},
    ]
  },
  {
    question:"What is the main attraction of Republic Day parade?",
    options:[
      {answer:"Military parade",correct:'false'},
      {answer:"Cultural parade",correct:'true'},
      {answer:"Sports parade",correct:'false'},
      {answer:"Religious parade",correct:'false'},
    ]
  },
  {
    question:"How many horses pull the President of India's carriage during the Republic Day parade",
    options:[
      {answer:"4",correct:'false'},
      {answer:"6",correct:'true'},
      {answer:"8",correct:'false'},
      {answer:"10",correct:'false'},
    ]
  },
  {
    question:"Who is the first citizen of India?",
    options:[
      {answer:"President",correct:'true'},
      {answer:"Prime Minister",correct:'false'},
      {answer:"Cheif Justice",correct:'false'},
      {answer:"Speaker of the Lok Sabha",correct:'false'},
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
  if(nextQuestion < quizQues2.length){
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
              You scored {score} out of {quizQues2.length*2}
              </div>
          ) : (
            <>
             <div className='question-section'>
              <div className='question-count'>
                <span>Question{currentQuestion + 1}</span>/{quizQues2.length}
                </div>
                <div className='question-text'>{quizQues2[currentQuestion].question}
                </div>
                </div>
                <div className='answer-section'>
                  {quizQues2[currentQuestion].options.map((options)=>(
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

    
    
