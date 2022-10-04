function FeedbackItem({rate, description}) {

  return (
    <div className="card">
      <div className="number-display">
        {rate}
      </div>
      <div className="text-display">
        {description}
      </div>
    </div>
  )
}

export default FeedbackItem;