'use client'
import MainHeader from "@/app/header/mainHeader";
import React, { useState } from "react";
import styles from '@/app/author/author.module.css'

const AuthorCreate: React.FC = () => {
    const onSubmit = (e: any) => {
        e.preventDefault()
        let data:any = {}
        for (let index = 0; index < e.target.length - 1; index++) {
            const element = e.target[index];
            data = {...data, [element.name]: element.value}
        }
        console.log("data -- - ", data)
    }
    return (
        <div>
            <MainHeader isTransparent={false} />
            <main>
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <form className={`${styles.create_form_container} col-md-4`} onSubmit={onSubmit}>
                        <h2 className="color text-center m-0">Create Book</h2>
                        <div className="row mt-3 mb-3">
                            <label className="col-form-label col-md-4 color">Name</label>
                            <div className="col-md-8">
                                <input type="text" name="name" placeholder="Name" className="form-control" />
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <label className="col-form-label col-md-4 color">Date of Birth</label>
                            <div className="col-md-8">
                                <input type="date" name='date_of_birth' placeholder="Date of Birth" className="form-control" />
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <label className="col-form-label col-md-4 color">Nationality</label>
                            <div className="col-md-8">
                                <input type="text" name='nationality' placeholder="Nationality" className="form-control" />
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <label className="col-form-label col-md-4 color">Award</label>
                            <div className="col-md-8">
                                <input placeholder="Award Win" name='award_win' type="number" className="form-control" />
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <label className="col-form-label col-md-4 color">No of Books</label>
                            <div className="col-md-8">
                                <input type="number" placeholder="No of Books" name="no_of_books" className="form-control" />
                            </div>
                        </div>
                        <div className="row mt-3 mb-3">
                            <label className="col-form-label col-md-4 color">Notes</label>
                            <div className="col-md-8">
                                <input type="text" placeholder="Notes" name="notes" className="form-control" />
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
export default AuthorCreate;