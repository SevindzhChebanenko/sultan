import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import Title from '../components/Title/Title'

const ShoppingCartPage = () => {
	return (
		<div>
			<Breadcrumbs/>
			<Title/>
			<ShoppingCart/>
		</div>
	)
}

export default ShoppingCartPage