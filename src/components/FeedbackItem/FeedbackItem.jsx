import css from './FeedbackItem.module.css'

function FeedbackItem({ desc, value }) { 
  return (
    <li className={css.item}>
      <span className={css.desc}>{desc}: </span>
      <span>{value}</span>
    </li>
  )
}

export default FeedbackItem