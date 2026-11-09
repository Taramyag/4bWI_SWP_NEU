import styles from './Card.module.css'

type Props = {
    title?: string,
    text?: string,
}

export default function Card({ title, text }: Props) {
    return (





        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{text}</p>
            <img src="https://picsum.photos/200/300" alt="Hero" />
            <button>Click me</button>

        </div>
    )
}



//tsrfc