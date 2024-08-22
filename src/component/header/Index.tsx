import React from 'react'
import './Index.css'
import HomeButton from '../button/HomeButton'

const NavBar: React.FC = () => {
    return (
        <>
            <div className="MainHeader">
                <div className="MainHeaderLeftContent">
                </div>
                <HomeButton />
            </div>
        </>
    )
}

export default NavBar
