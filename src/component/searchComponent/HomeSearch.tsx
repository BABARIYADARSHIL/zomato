import React from 'react';
import ReusableSearchComponent from './index';
import HomeSearchSuggestionsComponent from '../searchSuggestions/Home';
import styles from './Home.module.css';

const SerchComponent: React.FC = () => {
    return (
        <ReusableSearchComponent
            placeholderText="Search for restaurant"
            suggestionComponent={HomeSearchSuggestionsComponent}
            styles={styles}
        />
    );
};

export default SerchComponent;
