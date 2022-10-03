function Header({text}) {
  return (
    <>
      {text &&
        <header>
          <h2>{text}</h2>
        </header>
      }
    </>
  )
}

export default Header;
