import React, { useContext } from 'react'
import carousalImage from './carousalImageTwo.jpg'
import { useState, useEffect } from 'react';


import coverImage from './images/ImageSix.png'
import coverImageTwo from './images/imageTwo.png'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import AppContext from '../context/appContext';
// import { useContext } from 'react';


export default function Carousal() {



    return (
        <div className="container-fluid">
            <div className="row align-items-center py-3">
                <div className="col-12 col-md-4">
                    <h1 className='fw-bold'>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem minus dignissimos inventore et ut hic numquam quaerat dolorum autem pariatur.</p>
                    <p className="text-secondary">1h ago hockey-update.com</p>
                </div>
                <div className="col-12 col-md-8">
                    <img src="https://resources.cricket-australia.pulselive.com/photo-resources/2025/06/14/e6f884ee-8d0f-4d47-8b6f-4942f03fda0d/14cummins-d4.jpg?width=950&height=535" alt="" className="card-img-top rounded-4" />
                </div>
            </div>
        </div>
    )
}