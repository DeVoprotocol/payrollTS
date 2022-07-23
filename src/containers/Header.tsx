import React, { Component } from 'react';
//router import
import { Link } from 'react-router-dom';
//Material-UI imports
import { Box, Breadcrumbs } from '@material-ui/core'
import { StyledButton } from '../styles/Styles'

class Header extends Component {

  render() {
    return (
      <div>
              <div className="col-span-2 flex items-center">
        <div className="flex items-center ml-2">
          <div className="h-10 text-primary">
            <Link to="/">
              <img src="https://devoprotocol.org/images/DeVo_logo.svg" />
            </Link>
          </div>
          <div className="h-10">
            <input
              placeholder="Anonymous Web Services"
              className="bg-blue-100 rounded-full h-full focus:outline-none ml-2 px-3 pr-4"
            />
          </div>
        </div>
      </div>
        <Box display="flex"
             alignItems="center"
             justifyContent="center">
          <Breadcrumbs aria-label="breadcrumb">
            <StyledButton>
              <Link to="/" className="link">Dashboard</Link>
            </StyledButton>
            <StyledButton color="primary">
              <Link to="/contractors" className="link">Log Hours</Link>
            </StyledButton>
            <StyledButton color="secondary">
              <Link to="/employer" className="link">Reward Volunteers</Link>
            </StyledButton>
          </Breadcrumbs>
        </Box>
      </div>
    );
  }
}

export default Header;
