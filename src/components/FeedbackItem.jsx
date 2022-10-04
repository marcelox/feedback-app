import {useState} from 'react';

function FeedbackItem() {

  const [rating, setRating] = useState(5);
  const [text, setText] = useState('This is an item');

  return (
    <div className="card">
      <div className="number-display">
        {rating}
      </div>
      <div className="text-display">
        {text}
      </div>
    </div>
  )
}

export default FeedbackItem;