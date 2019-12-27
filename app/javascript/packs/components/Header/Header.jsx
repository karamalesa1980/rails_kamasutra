import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

let Header = (props) => {
  return (
  	<header className={classes.header}>
  		<img src="logo.jpg" alt=""/>
			<div className={classes.loginBlock}>
				{ props.isAuth ? props.login
				:   <NavLink to={'/login'}>Login</NavLink> 
				}
				 
				
			</div>
	</header> 
	)
}
export default Header;