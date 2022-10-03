import PropTypes from 'prop-types';
function Header({text, bgColor}) {

  const headerStyles = {
    backgroundColor: bgColor,
    padding: '1.5rem'
  }

  return (
    <header style={headerStyles}>
      <h2>{text}</h2>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header;
