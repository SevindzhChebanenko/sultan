import React from 'react'
import CartButton from '../../Buttons/CartButton/CartButton'
import CatalogButton from '../../Buttons/CatalogButton/CatalogButton'
import PriceButton from '../../Buttons/PriceButton/PriceButton'
import CallBack from '../../CallBack/CallBack'
import DarkLogo from '../../Logo/DarkLogo/DarkLogo'
import Search from '../../Search/Search'
import styles from './BottomBar.module.scss'
const BottomBar = () => {
	return (
		<div className={styles.bar}>
			<DarkLogo/>
			<CatalogButton/>
			<Search/>
			<CallBack/>
			<PriceButton/>
			<CartButton/>
		</div>
	)
}

export default BottomBar