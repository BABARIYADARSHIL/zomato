import React, { useCallback, useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { datafetching } from "../../store/searchRedux/action/Index";
import { Suggestion, Item } from "../../types/SearchType";
import { selectRestaurantData } from "../CreateSelector";
import { ReusableSearchComponentProps } from "../../types/SearchType";
import Loading from "../loader/Index";
import { fetchLocation } from "../../store/location/action/Index";
import LocationIcon, { DownArrow, SearchIcon } from "../../asset/home-page-image/svg/Index";

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
                <LocationIcon />
              </i>
              <Input
                type="text"
                name="Location"
                placeholder="Search for restaurant"
                value={locationInput}
                readOnly
              />
              <i className="bi bi-caret-down-fill">
                <DownArrow />
              </i>
            </div>
            <div className={styles.MainSearchBarSearch}>
              <i className="bi bi-search">
                <SearchIcon />
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
                <Button onClick={toggleSuggestions} className={styles.ToggleButton}
                  label={showSuggestions ? "Hide" : "Show"}
                />
                : null
            }
          </div>
        </div>
        <div className={styles.MainSearchSuggetion}>
          {loading && <Loading className={`spinner-border text-primary ${styles.SpinnerBorder}`} />}
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
