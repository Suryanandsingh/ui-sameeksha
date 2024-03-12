'use client'
import React, { useEffect, useRef } from "react";
import styles from '@/app/popup/popup.module.css'
import '@/app/globals.css'

interface FilterModalType{
    isOpen:  boolean,
    closeModal: (value:boolean) => void
}
interface GenresTypes {
    id: number,
    label: string,
    value: string
}

const genres: GenresTypes[] = [
    {
        id: 1,
        label: 'Drama',
        value:'drama'
    },
    {
        id: 2,
        label: 'Comedy',
        value:'comedy'
    },
    {
        id: 3,
        label: 'Romantic',
        value:'romantic'
    },
    {
        id: 1,
        label: 'Drama',
        value:'drama'
    },
    {
        id: 2,
        label: 'Comedy',
        value:'comedy'
    },
    {
        id: 3,
        label: 'Romantic',
        value:'romantic'
    },
    {
        id: 1,
        label: 'Drama',
        value:'drama'
    },
    {
        id: 2,
        label: 'Comedy',
        value:'comedy'
    },
    {
        id: 3,
        label: 'Romantic',
        value:'romantic'
    },
    {
        id: 1,
        label: 'Drama',
        value:'drama'
    },
    {
        id: 2,
        label: 'Comedy',
        value:'comedy'
    },
    {
        id: 3,
        label: 'Romantic',
        value:'romantic'
    },
]

const FilterModal: React.FC<FilterModalType> = ({isOpen, closeModal}) => {
    const modalRef = useRef<any>(null)
    useEffect(()=>{
        const handleOutsideClick = (event:Event) => {
            if(modalRef.current && !modalRef.current.contains(event.target)){
                closeModal(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);

        return()=>{
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [])
    if(isOpen)
        return(
            <div className={`${styles.popup}`}>
                <div className={`${styles.popupContent}`} style={{width:'23%'}} ref={modalRef}>
                    <div className={`${styles.popupHeader}`}>
                        <h4>Genres</h4>
                    </div>
                    <hr className="m-0"/>
                    <div className="d-flex flex-row flex-wrap justify-content-between pe-2 pt-1 pb-1">
                        {
                            genres.map((genres: GenresTypes, index: number)=>(
                                <div key={index}>
                                    <input type="checkbox" className={`${styles.checkbox}`}/>
                                    <span className="font-larger">{genres.label}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className={`${styles.popupFooter}`}>
                        <button className="btn btn-secondary" type="button" onClick={()=> closeModal(false)}>Close</button>
                        <button className="btn button-primary" type="button">Submit</button>
                    </div>
                </div>
            </div>
        )
}
export default FilterModal;