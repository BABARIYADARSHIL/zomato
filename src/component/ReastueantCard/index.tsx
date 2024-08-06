import React from 'react';
import { NavLink } from 'react-router-dom';
import { Suggestion } from '../../types/SearchType';

interface RestaurantCardProps {
    item: Suggestion;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ item }) => {
    return (
        <div className="CardCards" key={item.id}>
            <NavLink to={`/item/${item.id}`} className='NavLink'>
                <div className="MainRestaurantImage">
                    <img
                        src={item.image}
                        className="card-img-top MainRestaurantImageImg"
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
    );
}

export default RestaurantCard;
