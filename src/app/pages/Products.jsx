import React from 'react';
import { Cards } from '../Components/Cards';
import Sidebar from '../Components/SideBar';
import { NavBar } from '../Components/NavBar';
import { MusicSearch } from './Music/MusicSearch';



export const Products = () => {


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <NavBar />
                </div>


            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-10 col-lg-10 col-xl-10'>
                        <h1>Productos</h1>
                        <Cards />
                    </div>
                    <div className='col-sm-12 col-md-2 col-lg-2 col-xl-2'>
                        <h3>Explora Más Allá</h3>
                        <MusicSearch/>
                    </div>
                </div>
            </div>

        </div>
    );
}