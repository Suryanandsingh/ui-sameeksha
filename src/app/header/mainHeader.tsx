import React from 'react';
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface HeaderItem {
    id: number;
    title: string;
    nav: string
}
interface propsType {
    isTransparent: boolean
}
const headerTitle: HeaderItem[] = [{ id: 1, title: 'Book', nav:'book' }, { id: 2, title: 'Song', nav:'' }, { id: 3, title: 'Movie', nav:'' }, { id: 4, title: 'TV Series', nav:'' }]

const MainHeader: React.FC<propsType> = ({isTransparent}) => (
    <header className={`d-flex flex-row align-items-center p-3 ${isTransparent?'':'header-bg'}`}>
        <Link href={'/'}><h3 className="color">Sameekhsa</h3></Link>
        <div className={`d-flex flex-row align-items-center w-50 justify-content-between ${styles.ml_15}`}>
            {
                headerTitle.map((header: HeaderItem, index: number) => (
                    <Link href={`/${header.nav}`}>
                        <span className={`${styles.headerFont} color pe-3 m-0`} key={index}>
                            {header.title}
                        </span>
                    </Link>
                ))
            }
            <div className='w-50 position-relative'>
                <input className={styles.input} placeholder='Search...' />
                <div className={styles.searchIconContainer}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
                </div>
            </div>
        </div>
    </header>
)
export default MainHeader;