import React from 'react'
import cart from '/cart-light.svg'
import styles from './ProductButton.module.scss'
const ProductButton = () => {
	return (
		<div className={styles.button}>
			<span>в корзину</span>
			<img src={cart} alt="catalog" />
		</div>
	)
}

export default ProductButton