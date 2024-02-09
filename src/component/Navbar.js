




export default function navbar(k) {
   
    
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${k.style} bg-${k.style}`}>
        <div className="container-fluid">
          <a className="navbar-brand" to="/">{k.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" to="/" style={{color: k.style==='dark'?'White':'Black'}}>{k.home}</a>
              <a className="nav-link" to="/About" style={{color: k.style==='dark'?'White':'Black'}}>{k.about}</a>
                <a className="nav-link" to="/Support" style={{color: k.style==='dark'?'White':'Black'}}>{k.support}</a>
            </div>
          </div>
          <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={k.clk}
                id="flexSwitchCheckDefault"
             />
             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            </label>
         </div>
        </div>
      </nav>
    </div>
  )
}
