import React from 'react'
import styles from './PriceButton.module.scss'
import download from '/download.svg'
const PriceButton = () => {
	return (
		<button className={styles.button}>
			<span>Прайс-лист</span>
			<img src={download} alt="download" />
		</button>
	)
}

export default PriceButton