function Header() {
    const headerArrays = [
        {id:1, name: "Features", href: "#", active: true},
        {id:2, name: "Sponsor", href: "#", active: false},
        {id:3, name: "About", href: "#", active: false},
        {id:4, name: "Contact", href: "#", active: false},
    ]
  return (
      <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container container-fluid">
                  <img src="/src/assets/react.svg"/>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-75">
                          {
                              headerArrays.map((item) => {
                                  const linkClasses = item.active ? "nav-link active" : "nav-link";
                                  return (
                                      <li className="nav-item">
                                          <a className={linkClasses} key={item.id + item.name} aria-current="page" href={item.href}>{item.name}</a>
                                      </li>
                                  )
                              })
                          }
                      </ul>
                      <form className="d-flex justify-content-end w-20">
                          <button className="btn btn-outline-success" type="submit">Sign In</button>
                      </form>
                  </div>
              </div>
          </nav>
      </header>
  )
}

export default Header
