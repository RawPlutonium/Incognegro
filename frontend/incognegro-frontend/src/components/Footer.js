import React from 'react';
import moment from 'moment';

function Footer(props){
    const year = moment().format('YYYY')
    return(
        <div>
        <footer class="page-footer">
        <div class="container">
          <div class="row stayLeft">
            <div class="col l6 s12">
              <h5 class="white-text">Incognegro</h5>
              <p class="grey-text text-lighten-4">A Dynamic chat for antisocial developers</p>
            </div>
            <div class="col l4 offset-l2 s12">
             
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          © {year} Copyright Incognegro Developers Incorporated
          </div>
        </div>
      </footer>
        </div>
    )
}
export default Footer;