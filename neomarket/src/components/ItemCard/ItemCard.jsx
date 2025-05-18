import React from 'react'
import styles from './ItemCard.module.css'

const MaxLengStr = 200

const ItemCard = ({ title, desc, price, imgName, avalible = false }) => {
    return (
        <section className={styles.card}>
            <img src={`${process.env.PUBLIC_URL}/imgs/${imgName}`} alt="failed load img" />

            <div>
                <span className={styles.title}>{title} </span>
                <span className={styles.price}>{price}$ </span>
            </div>

            <div className={styles.desc}>{desc.length > MaxLengStr ? desc.slice(0, MaxLengStr - 3) + '...' : desc}</div>
            <button
                className={styles.add}
                onClick={
                    (e) => {
                        e.preventDefault();
                        alert('click')
                    }
                }
            >
                Add to cart
            </button>
            {<div
                className={styles.avalible}
                style={
                    {
                        color: avalible
                            ? 'rgb(149, 245, 140)'
                            : 'rgb(255, 34, 19)'
                    }
                }
            >
                {
                    avalible
                        ? 'Avalible'
                        : 'Not Avalible'
                }
            </div>
            }
        </section>
    )
}

export default ItemCard

/*
<div className={`${styles.avalible} ${avalible ? styles.active:styles.nonactive}`}> {avalible ? 'Avalible' : 'Not Avalible'}</div>
*/