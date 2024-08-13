import React, { useCallback, useEffect, useState } from "react";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { datafetching } from "../../store/searchRedux/action/Index";
import { Suggestion, Item } from "../../types/SearchType";
import { selectRestaurantData } from "../CreateSelector";
import { ReusableSearchComponentProps } from "../../types/SearchType";
import Loading from "../loader/Index";
import { fetchLocation } from "../../store/location/action/Index";


const SerchComponent: React.FC<ReusableSearchComponentProps> = ({
  placeholderText,
  suggestionComponent: SuggestionComponent,
  styles
}) => {
  const [searchSuggestions, setSearchSuggestions] = useState<Suggestion[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true)
  const [locationInput, setLocationInput] = useState<string>("");
  const dispatch = useDispatch();
  const { restaurants, error, loading } = useSelector(selectRestaurantData);
  const location = useSelector((state: any) => state.locationReducer.location);


  useEffect(() => {
    if (location?.city) {
      setLocationInput(location.city);
    }
  }, [location]);

  const handleUpdate = useCallback((data: Suggestion[]) => {
    if (searchText.length > 0 && data) {
      const filteredSuggestions = data.filter((suggestion: Suggestion) =>
        suggestion.restaurantName.toLowerCase().includes(searchText.toLowerCase()) ||
        suggestion.categories.some((category: string) => category.toLowerCase().includes(searchText.toLowerCase())) ||
        suggestion.items.some((item: Item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
      );
      setSearchSuggestions(filteredSuggestions);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchText])

  useEffect(() => {
    handleUpdate(restaurants || []);
  }, [searchText, restaurants, handleUpdate]);

  const handleSearchSuggestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    dispatch(datafetching(searchValue));
  }

  const toggleSuggestions = () => {
    setShowSuggestions(prevState => !prevState);
  }

  const handleLocationClick = () => {
    dispatch(fetchLocation());
  };
  return (
    <>
      <div>
        <div className={styles.MainSearchBar}>
          <div className={styles.MainSearchBarMain}>
            <div className={styles.MainSearchBarLocation}>
              <i className="bi bi-geo-alt-fill" onClick={handleLocationClick}>
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
                name="Location"
                placeholder="Search for restaurant"
                value={locationInput}
                readOnly
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
            <div className={styles.MainSearchBarBorder}></div>
            <div className={styles.MainSearchBarSearch}>
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
                className={styles.MainSearchBarInput}
                type="text"
                placeholder={placeholderText}
                value={searchText}
                onChange={handleSearchSuggestion}
              />

            </div>
          </div>

          <div>

            {
              searchSuggestions.length > 0 ?
                <button onClick={toggleSuggestions} className={styles.ToggleButton}>
                  {showSuggestions ? "Hide" : "Show"}
                </button> : null
            }
          </div>
        </div>
        <div className={styles.MainSearchSuggetion}>
          {loading && <Loading
            className={`spinner-border text-primary ${styles.SpinnerBorder}`} />}
          {!loading && !error && showSuggestions && searchSuggestions.length === 0 && searchText.length > 0 && (
            <p className={styles.NoResultsMessage}>No results found for "{searchText}".</p>
          )}
          {!loading && !error && showSuggestions && searchSuggestions.length > 0 && (
            <SuggestionComponent suggestions={searchSuggestions} />
          )}
        </div>
      </div>
    </>
  );
};

export default SerchComponent;
