import React from 'react';
import Image from '../Image';

interface Suggestion {
    id: number;
    restaurantName: string;
    restaurantAddress: string;
    restaurantRating: number;
    restaurantImage: string;
    restaurantCuisine: string;
    restaurantType: string;
}

interface SearchSuggestionsComponentProps {
    suggestions: Suggestion[];
}

const SearchSuggestionsComponent: React.FC<SearchSuggestionsComponentProps> = ({ suggestions }) => {
    return (
        <div>
            {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="card" style={{ width: "33rem", display: "flex" }}>
                    {suggestion.restaurantImage && (
                        <Image className="card-img-top" src={suggestion.restaurantImage} alt={suggestion.restaurantName} />
                    )}
                    <div className="card-body">
                        <h5 className="card-title">{suggestion.restaurantName}</h5>
                        <p className="card-text">{suggestion.restaurantAddress}</p>
                        <p className="card-text">Rating: {suggestion.restaurantRating}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchSuggestionsComponent;
