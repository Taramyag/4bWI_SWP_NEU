import styles from './Card.module.css'

type Props = {
    title?: string,
    text?: string,
    image: string
}

const Woerter = ["Fenster", "Haus", "Auto", "Baum", "Straße", "Vogel", "Wasser", "Sonne", "Mond", "Stern"]

export default function Card({ title, text, image }: Props) {

    const random = Math.random();
    const randow = Woerter[Math.floor(Math.random() * Woerter.length)];
    return (


        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{text}</p>
            <img src={image + "?" + random} alt="Hero" />
            <p>{randow}</p>

        </div>
    )
}



//tsrfc