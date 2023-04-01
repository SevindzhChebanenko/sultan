import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from './TopBar/TopBar'
import BottomBar from './BottomBar/BottomBar'
const Navigation = () => {
	return (
		<nav>
				<TopBar/>
				<BottomBar/>
		</nav>
	)
}

export default Navigation