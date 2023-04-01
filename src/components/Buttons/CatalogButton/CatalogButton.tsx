import React from 'react'
import catalog from '/catalog.svg'
import styles from './CatalogButton.module.scss'
import { Link } from 'react-router-dom'
const CatalogButton = () => {
	return (
		<Link to={'/catalog'}>
			<div className={styles.button}>
				<span>Каталог</span>
				<img src={catalog} alt="catalog" />
			</div>
		</Link>
	)
}

export default CatalogButton