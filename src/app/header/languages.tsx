import React from "react";
import styles from './header.module.css'

interface LanguageTypes {
    id: number,
    label: string,
    value: string
}

const languagesList: LanguageTypes[] = [
    {
        id: 1,
        label: 'Hindi',
        value:'hindi'
    },
    {
        id: 2,
        label: 'English',
        value:'comedy'
    },
    {
        id: 3,
        label: 'More ->',
        value:'more'
    },
]

const Languages: React.FC = () => {
    return(
        <div>
            <div className={`d-flex flex-row flex-wrap`}>
                {
                    languagesList.map((Language: LanguageTypes, index: number)=>(
                        <small className="color-sec me-2 cursor-pointer hover-underlines" key={index}>{Language.label}</small>
                    ))
                }
            </div>
        </div>
    )
}
export default Languages;