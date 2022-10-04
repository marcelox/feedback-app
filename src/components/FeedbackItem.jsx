import Card from './shared/Card';

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

export default FeedbackItem;