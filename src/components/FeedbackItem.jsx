import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem({rate, description}) {

  return (
    <Card>
      <div className="number-display">
        {rate}
      </div>
      <div className="text-display">
        {description}
      </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  rate: PropTypes.number,
  description: PropTypes.string,
}

export default FeedbackItem;