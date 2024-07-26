import React, { useEffect } from 'react'
import Styles from './index.module.css'
import NavBar from '../header/index'
import Image from '../../component/Image'
import SerchComponent from '../../component/searchComponent/index'
import { useDispatch } from 'react-redux'
import { datafetching } from '../../store/searchRedux/action'

const Home = () => {
    const dispatch = useDispatch()

    return (
        <>
            <div className={Styles.MainHome}>
                <div className={Styles.MainHomeContentLeft}>
                    <NavBar />
                    <div className={Styles.MainHomeContentLeftContent}>
                        <Image
                            className={Styles.MainHomeContentLeftContentImage}
                            src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'
                        />
                    </div>
                    <div className={Styles.MainHomeContentLeftContentText}>
                        <h1>Discover the best food & drinks in  <span> Indore</span></h1>
                    </div>
                    <div className={Styles.MainHomeContentLeftContentSearchBar}>
                        <SerchComponent/>
                    </div>
                </div>
                <div className={Styles.MainHomeContentRigth}>

                </div>
            </div>

        </>
    )
}

export default Home
