import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import styles from '../../styles/AnimalGrid.module.css'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AnimalGrid() {
    return (
        <div>
            <Head>
                <title>Colibro</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.gridContainer}>
            <Row>
                <Link href="/Animals/GoldenTamarin"><a><Col><div className={styles.rowContainer}><img src="/matt-flores.jpg" className={styles.imgContainer}></img></div></Col></a></Link>
                <Link href="/Animals/GalapagosPenguin"><a><Col><div className={styles.rowContainer}><img src="/Penguin.jpg" className={styles.imgContainer}></img></div></Col></a></Link>
                <Link href="/Animals/AndeanCat"><a><Col><div className={styles.rowContainer}><img src="/Andean.jpg" className={styles.imgContainer}></img></div></Col></a></Link>
                <Link href="/Animals/WhaleShark"><a><Col><div className={styles.rowContainer}><img src="/WhaleShark.jpg" className={styles.imgContainer}></img></div></Col></a></Link>
                <Link href="/Animals/HawksBill"><a><Col><div className={styles.rowContainer}><img src="/Hawksbill.jpg" className={styles.imgContainer}></img></div></Col></a></Link>
                <Link href="/Animals/GoldenTamarin"><a><Col><div className={styles.rowContainer}><img src="/MountainTapir.jpg" className={styles.imgContainer}></img></div></Col></a></Link>

            </Row>

            </div>
         
        </div>
    )
}