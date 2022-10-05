import Card from './shared/Card';
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa';

function FeedbackItem({id, description, rate}) {

  return (
    <Card>
      <div className="number-display">
        {rate}
      </div>
      <button onClick={() => console.log(id)} className='close'>
        <FaTimes color='orange'/>
      </button>
      <div className="text-display">
        {description}
      </div>
    </Card>
  )
}

export default FeedbackItem;