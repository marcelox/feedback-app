import PropTypes from 'prop-types';

function Card({reverse, children}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card