import {useState} from 'react';

function FeedbackItem() {

  const [rating, setRating] = useState(5);
  const [text, setText] = useState('This is an item');

  const handleClick = () => {
    setRating((previous_state) => {
      console.log(previous_state); // rating
      return previous_state + 1;
    })
  }

  return (
    <div className="card">
      <div className="number-display">
        {rating}
      </div>
      <div className="text-display">
        {text}
      </div>
      <button onClick={handleClick}>Set rate</button>
    </div>
  )
}

export default FeedbackItem;