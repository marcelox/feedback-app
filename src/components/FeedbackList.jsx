import FeedbackItem from "./FeedbackItem";
import Card from "./shared/Card";
import PropTypes from 'prop-types';

function FeedbackList({feedback, handleDelete}) {

  if (feedback.length === 0) return <Card reverse>No feedback yet</Card>

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem 
          id={item.id} 
          key={item.id} 
          rate={item.rating} 
          description={item.text} 
          handleDelete={handleDelete} 
        />
      ))
      }
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      rating: PropTypes.number,
    })
  )
}

export default FeedbackList