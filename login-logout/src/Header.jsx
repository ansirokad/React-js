function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          My Website
        </a>

        <div>
          <button className="btn btn-primary me-2">
            Sign In
          </button>

          <button className="btn btn-danger">
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
