import styles from '../page.module.css'

import { Aleo } from 'next/font/google'

const aleo = Aleo({ 
    variable: '--font-aleo',
    subsets: ['latin'], 
    weight: '700' 
})

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={aleo.variable} id="navbar">
            <Link href="/" className={styles.navbar}>Home</Link>
            <Link href="/folders" className={styles.navbar}>Folders</Link>
            <Link href="/gallery" className={styles.navbar}>Gallery</Link>
            <Link href="/camera" className={styles.navbar}>Camera</Link>
            <Link href="/search" className={styles.navbar}>Search</Link>
        </nav>
    )
}