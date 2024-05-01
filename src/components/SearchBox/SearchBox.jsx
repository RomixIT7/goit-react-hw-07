import { useDispatch, useSelector } from "react-redux";

import { selectNameFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchContact = useSelector(selectNameFilter);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={css.searchLabel}>
      <span>Find contacts by name</span>
      <input
        className={css.searchInput}
        type="text"
        value={searchContact}
        onChange={handleSearch}
      />
    </label>
  );
};

export default SearchBox;
