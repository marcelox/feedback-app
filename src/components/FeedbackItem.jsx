import Card from './shared/Card';
import {FaTimes} from 'react-icons/fa';

function FeedbackItem({id, description, rate, handleDelete}) {

  return (
    <Card>
      <div className="number-display">
        {rate}
      </div>
      {/* will be drilled up to App.js */}
      <button onClick={() => handleDelete(id)} className='close'>
        <FaTimes color='orange'/>
      </button>
      <div className="text-display">
        {description}
      </div>
    </Card>
  )
}

export default FeedbackItem;