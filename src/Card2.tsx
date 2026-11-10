import React from 'react'
type Props = {
    name: string
    image: string
    description: string
    author: string
}

import styles from './Card2.module.css'


export default function Card2({ name, image, description, author }: Props) {

    const random = Math.random();

    return (
        <div className={styles.card2}>
            <h2>{name}</h2>
            <img src={image + "?" + random} alt={name} />
            <p>{description}</p>
            <p>made by {author}</p>
        </div>
    )
}