import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

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