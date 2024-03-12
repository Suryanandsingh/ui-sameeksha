import React, { useState } from "react";
import styles from './header.module.css'

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
        id:4,
        label: 'More ->',
        value: 'more'
    }
]
interface ChildComponentProps {
    setMore: (value: boolean) => void;
  }
const Genres: React.FC<ChildComponentProps> = ({setMore}) => {
    
    const onClickFilter = (value: string) => {
        if(value === 'more'){
            setMore(true)
        }
    }
    return(
        <div>
            <div className={`d-flex flex-row flex-wrap`}>
                {
                    genres.map((genre: GenresTypes, index: number)=>(
                        <small 
                            className="color-sec me-2 cursor-pointer hover-underlines" 
                            key={index}
                            data-bs-toggle="modal" 
                            data-bs-target="#more_genres"
                            onClick={()=>onClickFilter(genre.value)}
                        >{genre.label}</small>
                    ))
                }
            </div>
        </div>
    )
}
export default Genres;