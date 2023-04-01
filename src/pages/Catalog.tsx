import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import Catalog from '../components/Catalog/Catalog'
import Categories from '../components/Categories/Categories'
import SortTitle from '../components/SortTitle/SortTitle'
const CatalogPage = () => {
	return (
		<>
			<Breadcrumbs/>
			<SortTitle/>
			<Categories/>
			<Catalog/>
		</>
	)
}

export default CatalogPage