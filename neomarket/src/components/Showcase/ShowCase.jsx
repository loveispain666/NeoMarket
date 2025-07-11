import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import styles from './ShowCase.module.css'

const ShowCase = () => {
    return (
        <div>ShowCase</div>
    )
}

export const ShowCaseStr = ({ data }) => {
    return (
        <div className={styles.row}>
            {data.map((item, index) => (
                <ItemCard key={index} {...item} />
            ))}
        </div>
    );
}


export default ShowCase

