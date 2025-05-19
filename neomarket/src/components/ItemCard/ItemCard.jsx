import React from 'react'
import styles from './ItemCard.module.css'

const ItemCard = ({ title, price, imgName = false }) => {
    return (
        <section className={styles.card}>
            <img src={`${process.env.PUBLIC_URL}/imgs/${imgName}`} alt="failed load img" />

            <div>
                <div className={styles.title}>{title.length>50 ? title.slice(0, 37) + '...' : title}</div>
                <div className={styles.price}>{price}$</div>
            </div>
        </section>
    )
}

export default ItemCard
