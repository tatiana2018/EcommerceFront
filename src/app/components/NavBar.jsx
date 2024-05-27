import React from "react";
import SideBar from './SideBar';


export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-end">
                <div >
                    <SideBar/>
                </div>
            </div>
        </nav>
    )
}

