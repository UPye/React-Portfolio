import React from 'react';

function Footer () { 
    return (
      <footer>

     <div className="row">
        <div className="columns">
           <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/urikapye/" target="blank"> <i className="fab fa-linkedin"></i> </a></li>
            <li><a href="https://github.com/UPye" target="blank"> <i className="fab fa-github"></i> </a></li>
            <li><a href="https://stackoverflow.com/users/16403496/upye" target="blank"> <i className="fab fa-stack-overflow"></i> </a></li>
           </ul>

           <ul className="copyright">
              <li>&copy; 2021 Urika Pye</li>
           </ul>

        </div>
   </div>
  </footer>
    );
  }


export default Footer;