import React from 'react'
import search from '/search.svg'
import styles from './Search.module.scss'
const Search = () => {
	return (
		<div className={styles.search}>
			<input className={styles.input} type="text" placeholder='Поиск...'/>
			<button className={styles.button}>
				<img className={styles.image} src={search} alt="search" />
			</button>
		</div>
	)
}

export default Search