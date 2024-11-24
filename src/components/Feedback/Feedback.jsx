import css from './Feedback.module.css'
import FeedbackItem from '../FeedbackItem/FeedbackItem'

function Feedback({
  feedbacks = null,
  totalFeedbacks = 0
}) {
  if (feedbacks === null || totalFeedbacks == 0)
    return (<></>)
  else
    return (
      <ul className={css.feedbacks}>
        {Object.keys(feedbacks).map((key) => {
          return (
            <FeedbackItem key={key} desc={key} value={feedbacks[key]} />
          )
        })}
        <FeedbackItem key="total" desc="total" value={totalFeedbacks} />
        <FeedbackItem key="positive" desc="positive" value={Math.round((feedbacks.good / totalFeedbacks) * 100) + "%"} />
      </ul>
    )
 }

export default Feedback