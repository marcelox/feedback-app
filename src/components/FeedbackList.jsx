function FeedbackList({feedback}) {
  console.log(feedback);
  if (!feedback || feedback.length === 0) return;

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))
      }
    </div>
  )
}

export default FeedbackList