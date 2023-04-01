import React from 'react'
import styles from './Footer.module.scss'
import arrow from '/arrow.svg'
import logo from '/light-logo.svg'
import download from '/download.svg'
import telegram from '/telegram.svg'
import whatsUp from '/whats-up.svg'
import visa from '/visa.svg'
import master from '/master.svg'
const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className='container'>
				<div className={styles.inner}>
					<div className={styles.about}>
						<img className={styles.logo} src={logo} alt="logo" />
						<p className={styles.text}>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
						<div className={styles.subtext}>Подпишись на скидки и акции</div>
						<div className={styles.email}>
							<input type="text" placeholder='Введите ваш E-mail'/>
							<button>
								<img src={arrow} alt="search" />
							</button>
						</div>
					</div>
					<div className={styles.links}>
						<div>
							<div className={styles.title}>Меню сайта:</div>
							<div className={styles.link}>О компании</div>
							<div className={styles.link}>Доставка и оплата</div>
							<div className={styles.link}>Возврат</div>
							<div className={styles.link}>Контакты</div>
						</div>
						<div>
							<div className={styles.title}>Категории:</div>
							<div className={styles.link}>Бытовая химия</div>
							<div className={styles.link}>Косметика и гигиена</div>
							<div className={styles.link}>Товары для дома</div>
							<div className={styles.link}>Товары для детей и мам</div>
							<div className={styles.link}>Посуда</div>
						</div>
						<div>
							<div className={styles.title}>Скачать прайс-лист:</div>
							<button className={styles.button}>
								<span>Прайс-лист</span>
								<img src={download} alt="download" />
							</button>
							<div className={styles.subtext}>Подпишись на скидки и акции</div>
							<div className={styles.social}>
								<img src={whatsUp} alt="WhatsUp" />
								<img src={telegram} alt="Telegram" />
							</div>
						</div>
						<div>
							<div className={styles.title}>Контакты:</div>
							<div className={styles.info}>
								<div>+7 (777) 490-00-91</div>
								<span>время работы: 9:00-20:00</span>
								<span className={styles.call}>Заказать звонок</span>
							</div>
							<div className={styles.info}>
								<div>opt.sultan@mail.ru </div>
								<span>На связи в любое время</span>
							</div>
							<div className={styles.cards}>
								<img src={visa} alt="visa" />
								<img src={master} alt="master" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer