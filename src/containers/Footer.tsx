import React, { Component } from 'react';
//router import
import { Link } from 'react-router-dom';
//Material-UI imports
import { Box, Breadcrumbs } from '@material-ui/core'
import { StyledButton } from '../styles/Styles'

class Footer extends Component {
	render()
return (	<div>
		<footer className="flex-none bg-gray-700" style={{ width, height }}>
			<h1 className="text-center text-sm text-gray-50 py-2 align-baseline">
				Powered by{" "}
				<a href="https://github.com/tarique1988" className="font-bold">
					Tarique
				</a>{" "}
				<span className="mx-6 text-sm">&copy; 2021</span>
			</h1>
		</footer>
		</div>
	);
};

export default Footer;
