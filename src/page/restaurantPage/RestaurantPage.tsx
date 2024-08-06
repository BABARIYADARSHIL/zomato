import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantData, filterAll, filterRating, filterVeg } from '../../store/reastaurant/action';
import { Link, NavLink } from 'react-router-dom';
import { Suggestion } from '../../types/SearchType';
import { RestaurantStates } from '../../types/Restaurant';
import Image from '../../component/Image';
import Button from '../../component/Button';
import RestaurantSerchComponent from '../../component/searchComponent/RestaurantSearch';
import './index.css'
import Loading from '../../component/loader';
import RestaurantCard from '../../component/ReastueantCard';

const RestaurantPage: React.FC = () => {
  const dispatch = useDispatch();
  const { FilteredData, loading, error } = useSelector((state: { restaurant: RestaurantStates }) => state.restaurant)


  useEffect(() => {
    dispatch(fetchRestaurantData());
  }, [dispatch])

  if (!FilteredData) {
    return <Loading
      className="spinner-border text-primary SpinnerBorder" />
  }
  if (loading) {
    return <Loading
      className="spinner-border text-primary SpinnerBorder" />
  }
  return (
    <>
      <div className='MainRestaurantContent'>
        <div className='MainRestaurantContentLeft'>
          <div className="MainRestaurantContentLeftContent">
            <Link to='/'>
              <Image
                className="MainRestaurantContentLeftContentImage"
                src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
              />
            </Link>
          </div>
          <div className='RestaurantSerchComponent'>
            <RestaurantSerchComponent />
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

      <div className="MainRestaurant">
        <div className="MainRestaurantCenter">
          <div className="MainRestaurantLeft">
            <div className="MainRestaurantLeftContent">
              <NavLink
                className={({ isActive }) =>
                  `MainRestaurantLeftContentNavLink ${isActive ? "active" : "inactive"}`
                }
                to='' onClick={() => dispatch(filterAll())}>ALL</NavLink>
              <NavLink
                className={({ isActive }) =>
                  `MainRestaurantLeftContentNavLink ${isActive ? "active" : "inactive"}`
                }
                to='' onClick={() => dispatch(filterRating())}>Rating</NavLink>
              <NavLink
                className={({ isActive }) =>
                  `MainRestaurantLeftContentNavLink ${isActive ? "active" : "inactive"}`
                }
                to='' onClick={() => dispatch(filterVeg())}>Veg</NavLink>
            </div>
          </div>
          <div className="MainRestaurantRigth">
            {loading ? (
              <Loading
                className="spinner-border text-primary SpinnerBorder" />
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : FilteredData && FilteredData.length > 0 ? (
              FilteredData.map((item: Suggestion) => (
                <RestaurantCard key={item.id} item={item} />
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
