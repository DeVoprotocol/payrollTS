import React, { Component } from 'react';
//router import
import { Link } from 'react-router-dom';
//Material-UI imports
import { Box, Breadcrumbs } from '@material-ui/core'
import { StyledButton } from '../styles/Styles'

class Footer extends Component {
	render() {
return ( 
  <footer>
        <div className="container-fluid footer">
          <div className="row">
            <div className="col-md-12">
              <ul className="pull-right list-unstyled">
                <li>
                    <a href="">ContactUs</a>
                </li>
                <li>
                    DeVo {new Date().getFullYear()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
	);
};
};

export default Footer;
