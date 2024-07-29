import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantData, filterAll, filterRating, filterVeg } from '../../store/reastaurant/action';
import { NavLink } from 'react-router-dom';
import './index.css'
import Image from '../../component/Image';
import Button from '../../component/Button';
import HomeSerchComponent from '../../component/searchComponent/HomeSearch';

const RestaurantPage: React.FC = () => {
  const dispatch = useDispatch();
  const { FilteredData } = useSelector((state: any) => state.restaurant)
  const { loading, error } = useSelector((state: any) => state.restaurant)


  useEffect(() => {
    dispatch(fetchRestaurantData());
  }, [dispatch])
  return (
    <>
      <div className='MainRestaurantContent'>
        <div className='MainRestaurantContentLeft'>
          <div className="MainRestaurantContentLeftContent">
            <Image
              className="MainRestaurantContentLeftContentImage"
              src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
            />
          </div>
          <div className='RestaurantSerchComponent'>
            <HomeSerchComponent />
          </div>
          <div className="MainRestaurantRightContent">
            <Button
              className="MainRestaurantRightContentButton"
              name="Login"
              label="Log in"
            />
            <Button
              className="MainRestaurantRightContentButton"
              name="SignUp"
              label="Sign Up"
            />
          </div>
        </div>
      </div>

      <div className="Main-Restaurant">
        <div className="Main-Restaurant-center">
          <div className="Main-Restaurant-Left">
            <div className="Main-Restaurant-Left-Content">
              <NavLink
                className={({ isActive }) =>
                  `NavBar-Main-center-NavLink ${isActive ? "active" : "inactive"}`
                }
                to='' onClick={() => dispatch(filterAll())}>ALL</NavLink>
              <NavLink
                className={({ isActive }) =>
                  `NavBar-Main-center-NavLink ${isActive ? "active" : "inactive"}`
                }
                to='' onClick={() => dispatch(filterRating())}>Rating</NavLink>
              <NavLink
                className={({ isActive }) =>
                  `NavBar-Main-center-NavLink ${isActive ? "active" : "inactive"}`
                }
                to='' onClick={() => dispatch(filterVeg())}>Veg</NavLink>
            </div>
          </div>
          <div className="Main-Restaurant-Rigth">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : FilteredData && FilteredData.length > 0 ? (
              FilteredData.map((item: any) => (
                <div className="card-cards" key={item.id}>
                  <NavLink to={`/item/${item.id}`} className='NavLink'>
                    <div className="Main-Restaurant-image">
                      <img
                        src={item.image}
                        className="card-img-top Main-Restaurant-image-img"
                        alt={item.restaurantName}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{item.restaurantName}</h5>
                      <h5 className="card-title">{item.foodType}</h5>
                      <p className="card-text">
                        Location: {item.location}
                      </p>
                      <p className="star-rating">
                        {item.rating}.0
                      </p>
                      <p className="card-text">
                        Categories: {item.categories.join(", ")}
                      </p>
                    </div>
                  </NavLink>
                </div>
              ))
            )
              : (
                <p>No restaurants found.</p>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantPage;
