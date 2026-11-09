import React from 'react'
type Props = {

    image: string
    image2: string
    image3: string
    image4: string
}
import styles from './Card3.module.css'



export default function Card3({ image, image2, image3, image4 }: Props) {
    return (
        <div className={styles.card3}>

            <img src={image} className={styles.card3} />
            <img src={image2} className={styles.Images} />
            <img src={image3} className={styles.Images} />
            <img src={image4} className={styles.Images} />

        </div>
    )
}