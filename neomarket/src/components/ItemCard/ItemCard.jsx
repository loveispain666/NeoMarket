import React from 'react'
import styles from './ItemCard.module.css'

const ItemCard = () => {
	const cardtext = `50 Гб за 300 руб/мес сим карта тарифный план t2 для 3G 4G LTE телефона
					теле2 tele2 т2 безлимитные соцсети и мессенджеры`

	const cost = '91'

	return (
		<div className={styles.card}>
			<div className={styles.cardImg}>
				<img src={`${process.env.PUBLIC_URL}imgs/Cat.jpg`} />
			</div>
			<div className={styles.cardBottom}>
				<div className={styles.cardName}>
					{cardtext.length > 65 ? cardtext.slice(0, 62) + '...' : cardtext}
				</div>
				<div className={styles.cardCost}>{cost} ₽</div>
			</div>
		</div>
	)
}

export default ItemCard
