import React from 'react'
import triangle from '/triangle.svg'
import styles from './SortTitle.module.scss'
const SortTitle = () => {
	return (
		<div className={styles.block}>
			<h2 className={styles.title}>Косметика и гигиена</h2>
			<div className={styles.sort}>
				Сортировка: <span>Название <img src={triangle} alt="triangle" /></span> 
			</div>
		</div>
	)
}

export default SortTitle