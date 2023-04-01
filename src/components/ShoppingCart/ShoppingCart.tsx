import React from 'react'
import styles from './ShoppingCart.module.scss'
const ShoppingCart = () => {
	return (
		<div>
			<div className={styles.void}>
				Вы еще ничего не добавили в корзину
			</div>
			<div className={styles.buy}>
				<button>Оформить заказ</button>
				<div className={styles.cost}>0,00 ₸</div>
			</div>
		</div>
	)
}

export default ShoppingCart