import React, { Component } from 'react';
import { style } from 'next/css';

export default class Photos extends Component {
	render() {
		return (
			<div className={style(styles.wrapper)}>
				<div className={style(styles.wrappergradient)}>
					<div className={style(styles.edge)}>
					</div>
					<div className={`${style(styles.mainPhoto)} ${style(styles.photo)}`}>
						<img className={style(styles.img)} src='https://source.unsplash.com/category/nature/1600x900'/>
						<div className={style(styles.gradient)}></div>
					</div>
					<div className={style(styles.edge)}>
					</div>
				</div>			
			</div>
		);
	}
}

const styles = {
	wrapper: {
		position: 'absolute',
		width: '100%',
		height: '100vh',
		top: '0',
		left: '0',
		backgroundSize: '200%',
		zIndex: -1,
		backgroundImage: 'url(https://source.unsplash.com/category/nature/1600x900)'
	},
	wrappergradient: {
		position: 'absolute',
		width: '100%',
		height: '100vh',
		top: '0',
		left: '0',
		zIndex: 0,
		// background: 'green',
		// opacity: '0.2'
	},
	photo: {
		width: '80%',
		margin: '3rem auto'
	},
	img: {
		width: '100%',
		boxShadow: '0px 0px 20px 1px rgba(199,199,199,1)',
	},
	edge: {
		boxShadow: '0px 0px 10px 1px rgba(199,199,199,1)',
		width: '60%',
		margin: '3rem auto',
		height: '5rem',
		background: 'transparent'
	},
	gradient: {

	}
}