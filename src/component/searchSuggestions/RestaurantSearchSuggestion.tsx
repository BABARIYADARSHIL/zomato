import React from 'react';
import SearchSuggestionsComponent from './Index';
import { SearchSuggestionsComponentProps, Suggestion } from '../../types/SearchType';

const RestaurantSearchSuggestion: React.FC<SearchSuggestionsComponentProps> = (props) => {
    const getNavLinkPath = (suggestion: Suggestion) => `/item/${suggestion.id}`;

    return (
        <SearchSuggestionsComponent {...props} getNavLinkPath={getNavLinkPath} />
    );
};

export default RestaurantSearchSuggestion;
