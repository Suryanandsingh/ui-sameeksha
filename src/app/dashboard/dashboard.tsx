'use client'
import React, { useState } from "react";
import styles from './dashboard.module.css';
import Genres from "../header/genres";
import Languages from "../header/languages";
import Link from "next/link";
import FilterModal from "../popup/filter";
import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client'

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const count2 = [1, 2, 3, 4, 5, 6, 7, 8]

const GET_ALL_BOOK = gql`
    query AllBooks{
        allBooks{
            id
            title
        }
    }
`
const DashBoard: React.FC = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const { loading, error, data } = useQuery(GET_ALL_BOOK, { errorPolicy: "all" });
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;
    if(data) console.log("datata  book- - ", data)
    const setMore = (value: boolean) => {
        setIsOpen(value)
    }
    return(
        <div style={{padding: '0.5rem 3rem'}}>
            <section id="books">
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
            <section id="movies">
                <div className="d-flex justify-content-between">
                    <Genres setMore={setMore}/>
                    <Languages/>
                </div>
                <div className="d-flex flex-row flex-wrap justify-content-between">
                    {
                        count2.map((c, index)=>(
                            <div key={index} className={styles.movieContainer}>
                                <img className={styles.movie} src="https://pixlr.com/images/index/ai-image-generator-one.webp" alt="books"/>
                            </div>
                        ))
                    }
                </div>
            </section>
            {isOpen&&<FilterModal isOpen={isOpen} closeModal={setMore}/>}
        </div>
    )
}

export default DashBoard;