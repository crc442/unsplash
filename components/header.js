import React, { Component } from 'react';
import { style } from 'next/css'

export default class Header extends Component {
	render() {
		return (
			<div className={style(styles.wrapper)}>
				<img className={style(styles.logo)} src='/static/images/logo.png'/>
			</div>
		);
	}
}

const styles = {
	wrapper: {
			height: '50px',
			background: '#FFF',
			boxShadow: '0px 0px 10px 1px rgba(199,199,199,1)',
			margin: '30px'
	},
	logo: {
		height: '100%'
	}
}
