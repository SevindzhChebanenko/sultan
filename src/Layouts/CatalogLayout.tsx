import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'

const CatalogLayout = () => {
	return (
		<>
			<div className='container'>
				<Navigation />
				<Outlet />
			</div>
			<Footer/>
		</>
	)
}

export default CatalogLayout