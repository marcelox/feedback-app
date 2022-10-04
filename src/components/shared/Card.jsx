function Card({reverse, children}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

export default Card