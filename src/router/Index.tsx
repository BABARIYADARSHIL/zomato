import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../page/home/Index';
import Item from '../page/item/Index'
import RestaurantPage from '../page/restaurantPage/Index';

const Index = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Restaurant" element={<RestaurantPage />} />
                    <Route path='/item/:id' element={<Item/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Index
