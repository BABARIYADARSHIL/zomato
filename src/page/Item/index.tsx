import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';
import { fetchRestaurantData } from '../../store/reastaurant/action';
import { Suggestion } from '../../types/SearchType';
import { RootState } from '../../types/Item';
import Button from '../../component/Button';
import Image from '../../component/Image';
import RestaurantSerchComponent from '../../component/searchComponent/RestaurantSearch';
import './index.css';
import Loading from '../../component/loader';


const Item: React.FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const ReasurentId: string | undefined = id
    const [item, setItem] = useState<Suggestion | null>();
    const Items = useSelector((state: RootState) => state.restaurant.Restaurant || null);
    const { loading, error } = useSelector((state: RootState) => state.restaurant
    );

    useEffect(() => {
        if (ReasurentId) {
            dispatch(fetchRestaurantData());
        }
    }, [ReasurentId, dispatch]);

    useEffect(() => {
        if (Array.isArray(Items) && Items.length > 0 && ReasurentId) {
            const selectedItem = Items.find((item) => item.id === parseInt(ReasurentId));
            setItem(selectedItem || null);
        }
    }, [Items, ReasurentId]);


    if (error) {
        return <div className="error">Error: {error}
        </div>;
    }
    if (!item) {
        return <Loading
            className="spinner-border text-primary SpinnerBorder" />          
    }
    if (loading) {
        return <Loading
            className="spinner-border text-primary SpinnerBorder" />
    }

    return (
        <>
            <div className='MainItemContent'>
                <div className='MainItemContentLeft'>
                    <div className="MainItemContentLeftContent">
                        <Link to='/Restaurant'>
                            <Image
                                className="MainItemContentLeftContentImage"
                                src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
                            />
                        </Link>
                    </div>
                    <div className='ItemSerchComponent'>
                        <RestaurantSerchComponent />
                    </div>
                    <div className="MainItemRightContent">
                        <Button
                            className="MainItemRightContentButton"
                            name="Login"
                            label="Log in"
                        />
                        <Button
                            className="MainItemRightContentButton"
                            name="SignUp"
                            label="Sign Up"
                        />
                    </div>
                </div>
            </div>
            {loading ? (
                <div>
                    <Loading
                        className="spinner-border text-primary SpinnerBorder" />
                </div>
            ) : error ? (
                <div className="error">Error: {error}</div>
            ) :
                item &&
                (
                    <div className="ItemContainer">
                        <div className='ItemContainerImageMain'>
                            <div className='ItemContainerImageFirst'>
                                <img className="ItemImage1" src={item.image2} alt={item.restaurantName} />
                            </div>
                            <div className='ItemContainerImageMainSecond'>
                                <img className="ItemImage2" src={item.image3} alt={item.restaurantName} />
                                <img className="ItemImage3" src={item.image4} alt={item.restaurantName} />
                            </div>
                            <div className='ItemContainerImageMainThierd'>
                                <img className="ItemImage4" src={item.image} alt={item.restaurantName} />
                            </div>
                        </div>
                        <div className='ItemMainContainer'>
                            <div className='ItemMainContainerFirst'>
                                <div className="ItemMainTitle">
                                    <h1 className="ItemTitle">{item.restaurantName}</h1>
                                </div>
                                <div className='ItemMainCategory'>
                                    <p className="item-food-type">{item.foodType}</p>
                                    <p className="item-location">{item.location}</p>
                                    <p className="item-categories">{item.categories.join(', ')}</p>
                                </div>

                                <div className='ItemMainButtonContain'>
                                    <NavLink to={`https://www.google.com/maps/dir/?api=1&destination=${item.location}`} target="_blank" className='ItemMainButton'>
                                        <i className="bi bi-sign-turn-right"></i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sign-turn-right ItemMainButtonColor" viewBox="0 0 16 16">
                                            <path d="M5 8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5z" />
                                            <path fill-rule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134Z" />
                                        </svg>
                                        Direction
                                    </NavLink>
                                </div>
                            </div>
                            <div className="ItemMainContainerSecond">
                                <p className="ItemRating">{item.rating}.0
                                    <i className="bi bi-star  "></i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star ItemRatingStar" viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                    </svg>
                                </p>
                            </div>
                        </div>

                        <hr></hr>
                        <div className="ItemMenu">
                            <h5>Menu:</h5>
                            {item.items.map((menuItem, index) => (
                                <div key={index} className="MenuItem">
                                    <p className="MenuItemName">{menuItem.name} :</p>
                                    <p className="MenuItemPrice">{menuItem.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )

            }
        </>
    );
}

export default Item;
