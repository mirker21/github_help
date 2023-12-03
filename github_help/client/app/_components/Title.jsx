import styles from '../page.module.css'

import { Bungee } from 'next/font/google'

const bungee = Bungee({ 
    variable: '--font-bungee',
    subsets: ['latin'], 
    weight: '400' 
})

export default function Title() {
    return (
        <div className={bungee.variable} id="title">
            <h1 className={styles.title}>Hound All The Rocks</h1>
        </div>
    )
}