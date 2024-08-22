import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchRestaurantData } from '../../store/reastaurant/action/Index';
import { Suggestion } from '../../types/SearchType';
import { RootState } from '../../types/Item';
import Image from '../../component/Image';
import RestaurantSerchComponent from '../../component/searchComponent/RestaurantSearch';
import './Index.css';
import ItemCard from '../../component/itemCard/Index';
import Loading from '../../component/loader/Index';
import ItemButton from '../../component/button/ItemButton';

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
        if (Items && Items.length > 0 && ReasurentId) {
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
                    <ItemButton />
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
                    <ItemCard item={item} />
                )
            }
        </>
    );
}

export default Item;
