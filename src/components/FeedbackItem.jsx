import Card from './shared/Card';
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa';

function FeedbackItem({rate, description}) {

  return (
    <Card>
      <div className="number-display">
        {rate}
      </div>
      <button className='close'>
        <FaTimes color='red'/>
      </button>
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