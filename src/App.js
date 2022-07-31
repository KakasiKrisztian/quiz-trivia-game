import './App.css';
import React from 'react';
import Start from './components/Start';
import Question from './components/Question';

function App() {

  const [started, setStarted] = React.useState(false);
  const [questionsData, setQuestionsData] = React.useState([])
  const [onGoing, setOnGoing] = React.useState(false)
  const [count, setCount] = React.useState(0)
  
  const questions = questionsData.map(q => 
    <Question 
      key={q.question} 
      id={q.question} 
      title={q.question} 
      answers={[q.correctAnswer, ...q.incorrectAnswers]} 
      getResult={onGoing}
      addCount={addToCount}
    />)


  React.useEffect(() => {
    fetch("https://the-trivia-api.com/api/questions")
      .then(res => res.json())
      .then(data => setQuestionsData(data))
  }, [0])
  
  function addToCount(num){
    console.log("counting")
    setCount(prevCount => prevCount + num)
  }

  function getStarted(){
    setStarted(prevStarted => !prevStarted);
    
  }

  function getResult(){
    if (!onGoing){
      setOnGoing(prevStarted => !prevStarted)
    }else {
      fetch("https://the-trivia-api.com/api/questions")
      .then(res => res.json())
      .then(data => setQuestionsData(data))
      setOnGoing(prevStarted => !prevStarted)
    }
  }
  
  return (
    <div className="App">
      {!started && <Start letsStart={getStarted}/>}
      {started && questions}
      {started && <button className='submit' onClick={getResult}><p>{!onGoing ? "Check answers" : "Play again"}</p></button>}
      {/* {started && onGoing && <h3>{count}</h3>} */}
    </div>
  );
}

export default App;
