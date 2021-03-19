import { useState} from "react";
import './App.css';
import s from '../Components/FeedbackOptions/FeedbackOptions.module.css'

import Section from "./Section/Section"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Statistics from './Statistics'

import {FEEDBACK_OPTIONS} from "../data/constans"


function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
  const { good, neutral, bad } = state;

  const handleFeedback = ({ target }) => {
    const { feedback } = target.dataset
    console.log(feedback);
    setState(prevState => ({...state,[feedback] : prevState[feedback] + 1}))
  }

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const total = countTotalFeedback();
  
  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((good / total) * 100) : 0
  }
 
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  return (
      <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
          <Statistics good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}/>
      </Section>
    </div>
    )
  }


export default App;