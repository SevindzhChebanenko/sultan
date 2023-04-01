import React from 'react'
import callBack from '/call-back.png'
import styles from './CallBack.module.scss'
const CallBack = () => {
	return (
		<div className={styles.call}>
			<div className={styles.info}>
				<div className={styles.phone}>
					+7 (777) 490-00-91
				</div>
				<div className={styles.time}>
					время работы: 9:00-20:00
				</div>
				<div className={styles.link}>
					Заказать звонок
				</div>
			</div>
			<img className={styles.image} src={callBack} alt="callBack" />
		</div>
	)
}

export default CallBack