import MainHeader from "@/app/header/mainHeader";
import React from "react"
import styles from './details.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

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
    }
]

const BookDetails: React.FC = () => {
    const imageUrl = 'https://assouline.com/cdn/shop/files/Uzbek_HOMEPAGE_BANNER-MOBILE.jpg';
    const imageUrl0 = 'https://www.owlcrate.com/cdn/shop/files/mobile-image-TIMELESSTALES_1090x.png';

    const backgroundImage = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        color: 'white', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };
    return (
        <div >
            <MainHeader isTransparent={true}/>
            <main className="position-absolute top-0 w-100">
                <div style={backgroundImage}>
                    <div className="w-50"></div>
                    <div className="w-50" style={{padding: '1rem 7rem'}}>
                        {/* <div>
                            <span>6</span>
                            <span>150 pages</span>
                        </div> */}
                        <div className={styles.title}>
                            <p className="text-uppercase">Tim herry</p>
                            <h1 className="text-uppercase">Timeless Talk</h1>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <div>
                                {
                                    genres.map((genre: GenresTypes, index: number)=>(
                                        <span className="pe-2" key={index}>{genre.label}</span>
                                    ))
                                }  
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faShareNodes} className={styles.shareIcon}/>
                            </div>                          
                        </div>
                        <hr/>
                        <p>Make sure to replace '/path/to/your/image.jpg' with the actual path to your image file. Remember that the path to the image is relative to the public directory in a Next.js project. If your image is in the public folder, you can use /image.jpg directly. If your images are stored elsewhere, adjust the path accordingly. This example assumes that you are using CSS modules for styling. If you are using another styling approach, adapt the code accordingly.</p>
                    </div>
                </div>
                
            </main>
        </div>
    )
}

export default BookDetails;