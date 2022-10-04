import {useState} from 'react';

function FeedbackItem() {

  const [rating, setRating] = useState(5)


  return (
    <div className="card">
      <div className="number-display">
        {rating}
      </div>
      <div className="text-display">
        FeedbackItem
      </div>
    </div>
  )
}

export default FeedbackItem;