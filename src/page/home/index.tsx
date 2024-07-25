import React from 'react'
import './index.css'
import NavBar from '../header/index'
import Image from '../../component/Image'
import SerchComponent from '../../component/searchComponent/index'

const Home = () => {
    return (
        <>
            <div className='Main-Home'>
                <div className='Main-Home-Content-Left'>
                    <NavBar />
                    <div className='Main-Home-Content-Left-Content'>
                        <Image
                            className="Main-Home-Content-Left-Content-Image"
                            src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'
                        />
                    </div>
                    <div className='Main-Home-Content-Left-Content-Text'>
                        <h1>Discover the best food & drinks in  <span> Indore</span></h1>
                    </div>
                    <div className='Main-Home-Content-Left-Content-Serch-Bar'>
                        <SerchComponent />
                    </div>
                </div>
                <div className='Main-Home-Content-Rigth'>

                </div>
            </div>

        </>
    )
}

export default Home
