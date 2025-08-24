import React from 'react'
import { useParams } from 'react-router-dom'

const ItemCard = () => {
    const { id } = useParams();
    return (
        <div>пенис {id}</div>
    )
}

export default ItemCard