import React from 'react'
import './index.css'
import HomeButton from '../../component/Button/HomeButton'

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
