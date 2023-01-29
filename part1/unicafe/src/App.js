import { useState } from 'react'

const Buttons = (props) => {
  const {good, neutral, bad}= props.setters
  
  const getFeedback = (feedbackSetter) => {
    return () => feedbackSetter(prevCounter => prevCounter + 1)
  }

  return(
    <div>
      <Button text="good" HandleClick = {getFeedback(good)} />
      <Button text="neutral" HandleClick ={getFeedback(neutral)} />
      <Button text="bad" HandleClick ={getFeedback(bad)} />
    </div>
  )
}

const Button = (props) => {
  return <button onClick={props.HandleClick} >{props.text}</button>
}

const Statistics = ({states}) => {
  const {good, neutral, bad}= states
  const all = good + neutral + bad 
  const average = (good - bad) / all
  const positive = good / all

  if (all === 0 ) {
    return <div>No feedback given</div>
  }

  return(
    <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positve" value ={positive} />
    </div>
  )
}

const StatisticLine = ({text, value}) => <p> {text} {value} </p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setters = {good:setGood, neutral: setNeutral, bad:setBad}
  const states = {good:good, neutral: neutral, bad:bad}
  
  return (
    <div>
      <h1>give feedback</h1>
      <Buttons setters = {setters} />
      <h1>statistics</h1>
      <Statistics states={states} />
    </div>
  )
}

export default App