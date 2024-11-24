import { useState, useEffect } from 'react'

import Description from './Description/Description'
import Options from './Options/Options'
import Feedback from './Feedback/Feedback'
import Notification from './Notification/Notification'

function getZeroFeedbacks() {
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  }
}
function getDefaultFeedbacks() {
  const storedFeedbacks = localStorage.getItem("feedbacks")
  if (storedFeedbacks === null) 
    return getZeroFeedbacks()
  return JSON.parse(storedFeedbacks)
}

function App() {
  const [feedbacks, setFeedbacks] = useState(getDefaultFeedbacks)
  const totalFeedbacks = feedbacks.good + feedbacks.neutral + feedbacks.bad
  
  function addFeedback(key) {
    setFeedbacks({
      ...feedbacks,
      [key]: feedbacks[key] + 1
    })
  }
  function resetFeedbacks() {
    setFeedbacks(getZeroFeedbacks())
  }

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks))
  }, [feedbacks])

  return (
    <>
      <Description />
      <Options totalFeedbacks={totalFeedbacks} feedbackKeys={Object.keys(feedbacks)} addFeedback={addFeedback} resetFeedbacks={resetFeedbacks} />
      {totalFeedbacks > 0 ?
        (<Feedback feedbacks={feedbacks} totalFeedbacks={totalFeedbacks} />)
        : (<Notification msg="No feedback yet"/>)
      }
    </>
  )
}

export default App
