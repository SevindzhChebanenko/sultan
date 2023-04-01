import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CartButton.module.scss'
import cart from '/cart.svg'
const CartButton = () => {
	return (
		<div className={styles.block}>
			<Link to={'/cart'}><img className={styles.image} src={cart} alt="cart" /></Link>
			<div className={styles.info}>
				<span>Корзина</span>
				<div>12 478 ₸</div>
			</div>
		</div>
	)
}

export default CartButton