import './App.css';
import { useState } from 'react';
export default function App1() {
  //tech related ques
const quizQues1=[
  {
    question:"What tool would you use to reduce the digital image size?",
    options:[
      {answer:"Filter",correct:'false'},
      {answer:"Brush",correct:'false'},
      {answer:"Rotate",correct:'false'},
      {answer:"Crop",correct:'true'},
    ]
  },
  {
    question:"Making a compressed digital archive might produce what type of file format?",
    options:[
      {answer:"PDF",correct:'false'},
      {answer:"JPEG",correct:'false'},
      {answer:"ZIP",correct:'true'},
      {answer:"MP3",correct:'false'},
    ]
  },
  {
    question:"What technology is used to make telephone calls over the Internet possible?",
    options:[
      {answer:"Bluetooth",correct:'false'},
      {answer:"Ethernet",correct:'false'},
      {answer:"NFC",correct:'false'},
      {answer:"VoIP",correct:'true'},
    ]
  },
  {
    question:"What is the term for text that automatically continues from one line to the next?",
    options:[
      {answer:"Word processing",correct:'false'},
      {answer:"Word wrapping",correct:'true'},
      {answer:"Word flowing",correct:'false'},
      {answer:"Word binding",correct:'false'},
    ]
  },
  {
    question:"Which computer language is the most widely used?",
    options:[
      {answer:"C#",correct:'false'},
      {answer:"Swift",correct:'false'},
      {answer:"PHP",correct:'false'},
      {answer:"Java",correct:'true'},
    ]
  },
]
const [currentQuestion,setCurrentQuestion]=useState(0);
const [showScore,setShowScore]=useState(false);
const [score,setScore]=useState(2);

const handleAnsOpionClick=(correct)=>{
  if(correct){
    setScore(score + 1);
  }
  const nextQuestion=currentQuestion + 1;
  if(nextQuestion < quizQues1.length){
    setCurrentQuestion(nextQuestion);
  }else{
    setShowScore(true);
  }
};

      {/* {quizQues1.map((x)=>{
       return(
        <>
        <div>{x.question}</div>
        <div>{x.options.map((o)=>{
          return(
            <div>{o.answer}</div>
           
          )
        })}</div>
        </>
       )

      })}  */}
       
      return (
        <>
       
            
           <div className='app'>
            {
              showScore ? (
                <div className="score-section">
                  You scored {score} out of {quizQues1.length*2}
                  </div>
              ) : (
                <>
                 <div className='question-section'>
                  <div className='question-count'>
                    <span>Question{currentQuestion + 1}</span>/{quizQues1.length}
                    </div>
                    <div className='question-text'>{quizQues1[currentQuestion].question}
                    </div>
                    </div>
                    <div className='answer-section'>
                      {quizQues1[currentQuestion].options.map((options)=>(
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