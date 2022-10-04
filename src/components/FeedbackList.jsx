import FeedbackItem from "./FeedbackItem";
function FeedbackList({feedback}) {

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} rate={item.rating} description={item.text} />
      ))
      }
    </div>
  )
}

export default FeedbackList