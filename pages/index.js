import React from 'react'
import Header from '../components/header'
import Photos from '../components/photos'

import { style } from 'next/css'

export default () => (
	<div className={style(styles.body)}>
		<Photos />
	</div>
)

const styles = {
	body: {
	}
}