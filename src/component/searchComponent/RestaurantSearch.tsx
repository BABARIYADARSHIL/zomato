import React from 'react';
import ReusableSearchComponent from './Index';
import RestaurantSearchSuggestionsComponent from '../searchSuggestions/RestaurantSearchSuggestion';
import styles from './Home.module.css';

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
