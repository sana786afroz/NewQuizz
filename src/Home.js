import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home(){
    const options = ['Quiz 1','Quiz 2','Quiz 3'];
    const toquiz=useNavigate()
    function changeQuiz(e){
    const value=e.target.value
    if(value==='Quiz 1'){
        toquiz('QUIZ1')
    }else if(value==='Quiz 2'){
        toquiz('QUIZ2')
    }else {
        toquiz('QUIZ3')
    }
        
    
      
      

    }
    return(
        <div className='selectHome'>

<select className='select' onChange={changeQuiz}>

    {/* <option value='123'>Quiz 1</option>
    <option>Quiz 2</option>
    <option>Quiz 3</option> */}
    <option>Please choose one option</option>
					{options.map((option, index) => {
						return <option key={index} >
						{option }
                        </option>
                        })}
</select>
</div>

    )
}