import React from "react";
import { Carousels } from "../components/Main/Carousels";
import { Footer } from "../components/Layout/Footer";
import { MainNavBar } from "../components/Layout/MainNavBar";


export const Main = () => {



    return (
        <>

            <div className="row">
                <MainNavBar />
            </div>
            <div className="row" >
                <Carousels />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}