import React from 'react'
import Button from '../../component/Button'
import './index.css'

const NavBar = () => {
    return (
        <>
            <div className='Main-Header'>
                <div className='Main-Header-Left-Content'>
                </div>
                <div className='Main-Header-Right-Content'>
                    <Button
                        className="Main-Header-Right-Content-Button"
                        name="Login"
                        label="Log in"
                    />
                    <Button
                        className="Main-Header-Right-Content-Button"
                        name="SignUp"
                        label="Sign Up"
                    />
                </div>
            </div>
        </>
    )
}

export default NavBar
