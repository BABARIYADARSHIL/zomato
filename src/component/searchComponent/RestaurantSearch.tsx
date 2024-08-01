import React from 'react';
import ReusableSearchComponent from './index';
import RestaurantSearchSuggestionsComponent from '../searchSuggestions/RestaurantSearchSuggestion';
import styles from './Restaurant.module.css';

const RestaurantSerchComponent: React.FC = () => {
    return (
        <ReusableSearchComponent
            placeholderText="Search for restaurant"
            suggestionComponent={RestaurantSearchSuggestionsComponent}
            styles={styles}
        />
    );
};

export default RestaurantSerchComponent;
