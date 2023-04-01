import React from 'react'
import styles from './Categories.module.scss'
const Categories = () => {
	return (
		<div className={styles.categories}>
			<div className={styles.card}>Уход за телом</div>
			<div className={styles.card}>Уход за руками</div>
			<div className={styles.card}>Уход за ногами</div>
			<div className={styles.card}>Уход за лицом</div>
			<div className={styles.card}>Уход за волосами</div>
			<div className={styles.card}>Средства для загара</div>
			<div className={styles.card}>Средства для бритья</div>
			<div className={styles.card}>Подарочные наборы</div>
			<div className={styles.card}>Гигиеническая продукция</div>
			<div className={styles.card}>Гигиена полости рта</div>
			<div className={styles.card}>Бумажная продукция</div>
		</div>
	)
}

export default Categories