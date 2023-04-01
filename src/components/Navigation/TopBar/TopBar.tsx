import React from 'react'
import styles from './TopBar.module.scss'
import map from '/map.svg'
import mail from '/mail.svg'
const TopBar = () => {
	return (
		<div className={styles.bar}>
			<div className={styles.contacts}>
				<div className={styles.contact}>
					<img src={map} alt="map" />
					<div className={styles.information}>
						<div className={styles.top_side}>
							г. Кокчетав, ул. Ж. Ташенова 129Б
						</div>
						<div className={styles.bottom_side}>
							(Рынок Восточный)
						</div>
					</div>
				</div>
				<div className={styles.contact}>
					<img src={mail} alt="map" />
					<div className={styles.information}>
						<div className={styles.top_side}>
							г. Кокчетав, ул. Ж. Ташенова 129Б
						</div>
						<div className={styles.bottom_side}>
							(Рынок Восточный)
						</div>
					</div>
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.link}>
					О компании
				</div>
				<div className={styles.link}>
					Доставка и оплата
				</div>
				<div className={styles.link}>
					Возврат
				</div>
				<div className={styles.link}>
					Контакты
				</div>
			</div>
		</div>
	)
}

export default TopBar