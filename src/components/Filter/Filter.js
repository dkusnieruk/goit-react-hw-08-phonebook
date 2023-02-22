import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setFilterValue } from '../../Redux/FilterSlice';
import css from '../Filter/filter.module.css';
export function Filters() {
  const dispatch = useDispatch();

  return (
    <>
      <label className={css.label}>
        Search
        <input
          onChange={event =>
            dispatch(setFilterValue(event.currentTarget.value))
          }
          className={css.input}
          value={useSelector(selectFilters).filters}
          type="search"
          name="filter"
        ></input>
      </label>
    </>
  );
}
