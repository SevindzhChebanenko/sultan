import React from 'react'
import logo from '/dark-logo.svg'
import styles from './DarkLogo.module.scss'
const DarkLogo = () => {
	return (
		<img className={styles.logo} src={logo} alt="logo" />
	)
}

export default DarkLogo