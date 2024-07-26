import React, { useEffect, useState } from "react";
import Input from "../Input";
import "./index.module.css";
import Styles from "./index.module.css";
import SearchSuggestionsComponent from "../searchSuggestions";
import { searchSuggestionsData} from "../../utile/searchSuggestions/searchSuggestions";

interface Suggestion {
  id: number;
  restaurantName: string;
  restaurantAddress: string;
  restaurantRating: number;
  restaurantImage: string;
  restaurantCuisine: string;
  restaurantType: string;
}

const SerchComponent = (props: any) => {
  const [SearchSuggestions, setSearchSuggestions] = useState<Suggestion[]>([]);
  const [searchText, setSearchText] = useState<any>("");

  useEffect(() => {
    if (searchText.length > 0) {
      const filteredSuggestions = searchSuggestionsData.filter(suggestion =>
        suggestion.restaurantName.toLowerCase().includes(searchText.toLowerCase()) ||
        suggestion.restaurantCuisine.toLowerCase().includes(searchText.toLowerCase()) 
      );
      setSearchSuggestions(filteredSuggestions);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchText]);

  

  const handleSearchSuggestion = (e: any) => {
    setSearchText(e.target.value);
    console.log("searchText", searchText);

  }
  return (
    <>
    <div>
      <div className={Styles.MainSearchBar}>
        <div className={Styles.MainSearchBarMain}>
          <div className={Styles.MainSearchBarLocation}>
            <i className="bi bi-geo-alt-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </i>

            <Input
              type="text"
              placeholder="Search for restaurant"
            ></Input>
            <i className="bi bi-caret-down-fill">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </i>
          </div>
          <div className={Styles.MainSearchBarBorder}></div>
          <div className={Styles.MainSearchBarSearch}>
            <i className="bi bi-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </i>
            <Input
              className={Styles.MainSearchBarInput}
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              value={searchText}
              onChange={handleSearchSuggestion}
            />

          </div>
        </div>

      </div>
        <div className={Styles.MainSearchSuggetion}>
          {SearchSuggestions.length > 0 && (
            <SearchSuggestionsComponent suggestions={SearchSuggestions} />
          )}
        </div>
    </div>
    </>
  );
};

export default SerchComponent;
