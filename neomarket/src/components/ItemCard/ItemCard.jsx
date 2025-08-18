import React, { useState } from 'react'
import styles from './ItemCard.module.css'

const ItemCard = ({ text, price, img }) => {

	const [hasLiked, setHasLiked] = useState(false)

	const likeSvg = <svg width="120" height="110" viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M30.4567 0.0306091C30.2223 0.049112 29.4629 0.132375 28.7692 0.215638C14.8473 1.80689 3.41916 12.1963 0.634786 25.7867C-0.612089 31.8927 0.00666132 39.7287 2.23791 46.3527C4.60041 53.3191 8.56604 59.4066 15.3348 66.4469C18.541 69.7775 21.2785 72.2754 30.2223 80.0466C32.3879 81.9246 34.7973 84.0247 35.566 84.7186C45.166 93.2299 51.8317 100.372 57.5598 108.282L58.7785 109.975H60.016L61.2535 109.966L62.4723 108.19C67.6942 100.585 73.8348 93.7573 82.9567 85.4217C84.7473 83.7749 86.7817 81.9709 92.5848 76.8826C101.547 69.0003 106.132 64.4579 109.844 59.7674C115.872 52.1349 118.919 44.9373 119.819 36.1484C119.997 34.3351 119.979 29.9961 119.772 28.4234C118.788 20.9759 115.638 14.5739 110.416 9.42085C105.194 4.26778 98.6973 1.15004 91.1598 0.187884C89.3504 -0.0341512 85.4129 -0.0341512 83.566 0.187884C76.6942 1.04827 70.6379 3.7682 65.566 8.27367C63.7754 9.86492 61.7598 12.1315 60.5504 13.9171C60.2692 14.3334 60.016 14.6757 59.9879 14.6757C59.9598 14.6757 59.7067 14.3334 59.4254 13.9171C58.216 12.1315 56.2004 9.86492 54.4098 8.27367C49.4317 3.85147 43.441 1.12228 36.8035 0.252644C35.4348 0.0676149 31.5348 -0.0619057 30.4567 0.0306091Z" fill={hasLiked ? "red" : "white"} fill-opacity="1" onClick={() => (setHasLiked(!hasLiked))} />
	</svg>


	return (
		<div className={styles.card}>
			<div className={styles.cardImg}>
				<img src={`${process.env.PUBLIC_URL}imgs/${img}`} />
			</div>
			<div className={styles.cardAdd}>{likeSvg}</div>
			<div className={styles.cardBottom}>
				<div className={styles.cardName}>
					{text.length > 52 ? text.slice(0, 52) + '...' : text}
				</div>
				<div className={styles.cardCost}>{price} ₽</div>
			</div>
		</div>
	)
}

export default ItemCard
