'use client'
import React, { useState } from "react";
import Genres from "../header/genres";
import Languages from "../header/languages";
import Link from "next/link";

import styles from './book.module.css'
import MainHeader from "../header/mainHeader";

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Book: React.FC = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const imageUrl = 'https://assouline.com/cdn/shop/files/Uzbek_HOMEPAGE_BANNER-MOBILE.jpg';
    const setMore = (value: boolean) => {
        setIsOpen(value)
    }
    return(
        <div>
            <MainHeader isTransparent={false}/>
            <main className={styles.container}>
                <section id="trandingBooks" className={styles.trandingBooks}>
                    <div className={styles.topBooksSlider}>
                        <img className={styles.bookSlider}src={imageUrl} alt="image"/>
                    </div>
                </section>
                <section id="booksList">
                    <div className="d-flex justify-content-between">
                        <Genres setMore={setMore}/>
                        <Languages/>
                    </div>
                    <div className="d-flex flex-row flex-wrap justify-content-between">
                        {
                            count.map((c, index)=>(
                                <div className={styles.booksContainer}>
                                    <Link href={"/book/details"}> 
                                        <img className={styles.books} src="https://m.media-amazon.com/images/I/7138zaESFhL._SY522_.jpg" alt="books"/>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Book;