import React from 'react'
import styles from './Product.module.scss'
import volume from '/volume.svg'
import weight from '/weight.svg'
import cart from '/cart-light.svg'
import ProductButton from '../Buttons/ProductButton/ProductButton'
import { Link } from 'react-router-dom'
const Product = (props: any) => {
	return (
		<div className={styles.card}>
			<img className={styles.image} src={props.imageUrl} alt="product" />
			<div className={styles.body}>
				<div className={styles.size}>
					<img src={props.typeSize === 'weight' ? weight : volume} alt="size" />
					<span>{props.size} {props.typeSize === 'weight' ? 'г' : 'мл'}</span>
				</div>
				<Link to={'/product'}>
					<div className={styles.title}><span>{props.brand}</span> {props.title}</div>
				</Link>
				<div className={styles.info}>Штрихкод: <span>{props.barcode}</span></div>
				<div className={styles.info}>Производитель: <span>{props.maker}</span></div>
				<div className={styles.info}>Бренд: <span>{props.brand}</span></div>
				<div className={styles.footer}>
					<div className={styles.price}>{props.price} ₸</div>
					<ProductButton/>
				</div>
			</div>
		</div>
	)
}

export default Product