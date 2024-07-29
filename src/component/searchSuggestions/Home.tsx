import React from 'react';
import Image from '../Image';
import './index.css'
import { NavLink } from 'react-router-dom';

interface Suggestion {
    restaurantName: string;
    categories: string[];
}

interface SearchSuggestionsComponentProps {
    suggestions: Suggestion[];
}

const HomeSearchSuggestionsComponent: React.FC<SearchSuggestionsComponentProps> = ({ suggestions }) => {
    console.log("suggestions", suggestions);

    return (
        <div className='SearchSuggestionMain'>
            {suggestions.map((suggestion: any, index: Number) => (
                <div key={suggestion.id}>
                    <NavLink to={`/item/${suggestion.id}`} className="SearchSuggestionLink">
                        <div key={suggestion.id} className="card SearchSuggestionMainContent">
                            <Image className="card-img-top SearchSuggestionMainImage" src={suggestion.image} alt={suggestion.restaurantName} />
                            <div className="SearchSuggestionMainCardBody">
                                <h5 className="card-title">{suggestion.restaurantName}</h5>
                                <p className="SearchSuggestionMainText">{suggestion.foodType}</p>
                                <p className="SearchSuggestionMainText">{suggestion.location}</p>
                                <p className="SearchSuggestionMainText">Rating: {suggestion.rating}</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            ))}
        </div>

    );
};

export default HomeSearchSuggestionsComponent;
