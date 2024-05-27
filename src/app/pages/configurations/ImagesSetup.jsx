import React from 'react';
import { CreateImages } from '../../components/configurations/CreateImages';
import { NavBar } from '../../components/NavBar';

export const ImagesSetup = () => {


    return (
        <>
            <NavBar />

            <div className='container py-4  px-4 border shadow p-3 mb-5 rounded'>
                <div className='row my-4 mx-4'>
                    <h2 className='align-items-center'>Parametrización de imagenes</h2>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-12'>
                        <CreateImages />
                    </div>
                </div>
            </div>
        </>
    )
}