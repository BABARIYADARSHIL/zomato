import React from 'react';
import SearchSuggestionsComponent from './Index';
import { SearchSuggestionsComponentProps } from '../../types/SearchType';

const HomeSearchSuggestionsComponent: React.FC<SearchSuggestionsComponentProps> = (props) => {
    const getNavLinkPath = () => `/Restaurant`;

    return (
        <SearchSuggestionsComponent {...props} getNavLinkPath={getNavLinkPath} />
    );
};

export default HomeSearchSuggestionsComponent;
