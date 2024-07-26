import React from 'react'
import Button from '../../component/Button'
import Styles from './index.module.css'

const NavBar = () => {
    return (
        <>
            <div className={Styles.MainHeader}>
                <div className={Styles.MainHeaderLeftContent}>
                </div>
                <div className={Styles.MainHeaderRightContent}>
                    <Button
                        className={Styles.MainHeaderRightContentButton}
                        name="Login"
                        label="Log in"
                    />
                    <Button
                        className={Styles.MainHeaderRightContentButton}
                        name="SignUp"
                        label="Sign Up"
                    />
                </div>
            </div>
        </>
    )
}

export default NavBar
