import React from 'react';
import SearchSuggestionsComponent from './index';
import { SearchSuggestionsComponentProps, Suggestion } from '../../types/SearchType';

const HomeSearchSuggestionsComponent: React.FC<SearchSuggestionsComponentProps> = (props) => {
    const getNavLinkPath = (suggestion: Suggestion) => `/Restaurant`;

    return (
        <SearchSuggestionsComponent {...props} getNavLinkPath={getNavLinkPath} />
    );
};

export default HomeSearchSuggestionsComponent;
