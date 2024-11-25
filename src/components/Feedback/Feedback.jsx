import css from './Feedback.module.css'
import FeedbackItem from '../FeedbackItem/FeedbackItem'

function Feedback({
  feedbacks = {},
  totalFeedbacks = 0,
  positiveFeedbacks = ""
}) {
  return (
    <ul className={css.feedbacks}>
      {Object.keys(feedbacks).map((key) => {
        return (
          <FeedbackItem key={key} desc={key} value={feedbacks[key]} />
        )
      })}
      <FeedbackItem key="total" desc="total" value={totalFeedbacks} />
      <FeedbackItem key="positive" desc="positive" value={positiveFeedbacks} />
    </ul>
  )
 }

export default Feedback