'use client'
import MainHeader from "@/app/header/mainHeader";
import React from "react";
import styles from './create.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const CreateBook: React.FC = () => {
    const onSubmit = (e: any) => {
        e.preventDefault()
        let data:any = {}
        for (let index = 0; index < e.target.length - 1; index++) {
            const element = e.target[index];
            data = {...data, [element.name]: element.value}
        }
    }
    return(
        <div>
            <MainHeader isTransparent={false}/>
            <main className={`${styles.margin_top_10}`}>
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <form className={`col-md-8 mt-3 ${styles.form_container}`} onSubmit={onSubmit}>
                        <h2 className="color text-center m-0 mb-3">Create Book</h2>
                        <div className="row mb-3">
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Title</label>
                                <div className="col-md-10">
                                    <input type="text" name="title" placeholder="Title" className="form-control"/>
                                </div>
                            </div>
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Genres</label>
                                <div className="col-md-10">
                                    <input type="text" name='genres' placeholder="Genres" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Rating</label>
                                <div className="col-md-10">
                                    <input type="text" name='rating' placeholder="Rating" className="form-control"/>
                                </div>
                            </div>
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Pages</label>
                                <div className="col-md-10">
                                    <input placeholder="No of Pages" name='no_of_pages' type="number" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Author</label>
                                <div className="col-md-10 d-flex flex-row align-items-center">
                                    <select className="form-select" aria-label="Author name">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <FontAwesomeIcon className="color ms-2 me-2 cursor-pointer fs-5" icon={faRefresh}/>
                                    <Link href={"/author/create"} target="__blank" className="text-decoration-none">
                                        <span className="color cursor-pointer fs-2">+</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Rank</label>
                                <div className="col-md-10">
                                    <input type="number" placeholder="Rank" name="rank" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Weight</label>
                                <div className="col-md-10">
                                    <input type="text" placeholder="Weight" name="weight" className="form-control"/>
                                </div>
                            </div>
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Quantity</label>
                                <div className="col-md-10">
                                    <input placeholder="Quantity" type="number" name="quantity" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">ISBN</label>
                                <div className="col-md-10">
                                    <input type="text" placeholder="ISBN" name="isbn" className="form-control"/>
                                </div>
                            </div>
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Publisher</label>
                                <div className="col-md-10">
                                    <input placeholder="Publisher" type="text" name="publisher" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Language</label>
                                <div className="col-md-10">
                                    <input placeholder="Language" type="text" name="language" className="form-control"/>
                                </div>
                            </div>
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Dimensions</label>
                                <div className="col-md-10">
                                    <input placeholder="Dimensions" type="text" name="dimensions" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Country</label>
                                <div className="col-md-10">
                                    <input placeholder="Country of Origin" name="country_of_origin" type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Publication</label>
                                <div className="col-md-10">
                                    <input placeholder="Publication Date" name="publication_date" type="date" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Image</label>
                                <div className="col-md-10">
                                    <input placeholder="Image" type="text" name="image" className="form-control"/>
                                </div>
                            </div>
                            <div className="row col-md-6">
                                <label className="col-form-label col-md-2 color">Description</label>
                                <div className="col-md-10">
                                    <input placeholder="Description" name="description" type="textarea" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-light">Create</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}
export default CreateBook;