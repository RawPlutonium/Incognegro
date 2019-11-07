import React from 'react';


function Navbar(props){
    return(
    <div>
    <nav>
    <div className="nav-wrapper">
    <div>
    <a href="#!" className="brand-logo logoLeft"><i className="material-icons">cloud</i><span className="centerLogo">Incognegro</span></a>
    </div>
      <ul className="right hide-on-med-and-down">
        <li><a href="sass.html"><i className="material-icons">search</i></a></li>
        <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
        <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
        <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
      </ul>
    </div>
  </nav>
    </div>
    )
}

export default Navbar;