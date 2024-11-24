import css from './Options.module.css'

function Options({
  totalFeedbacks,
  feedbackKeys = [],
  addFeedback,
  resetFeedbacks,
}) {
  if (feedbackKeys.length == 0)
    return (<></>)
  else {
    function addFeedbackHandler(e) { 
      addFeedback(e.target.innerText.toLowerCase())
    }
    return (
      <div className={css.options}>
        {feedbackKeys.map((key) => {
          return (
            <button className={css.button} key={key} onClick={addFeedbackHandler} >{key}</button>
          )
        })}
        {totalFeedbacks > 0 && (<button className={css.button} key="reset" onClick={resetFeedbacks}>reset</button>)}
      </div>
    )
  }
 }

export default Options