import { useSelector, useDispatch } from "react-redux";
import { changeSearchField } from "../actions/actionCreators";
import Services from "./Services";

export default function Skills() {
  const { items, loading, error, search, hasQuery } = useSelector(
    (state) => state.skills
  );
  const dispatch = useDispatch()

  const handleSearch = (evt) => {
    const { value } = evt.target;
    dispatch(changeSearchField(value));
  }

  return (
    <>
      <div className='Skills'>
        <div>
          <input type="search" value={ search } onChange={ handleSearch } />
        </div>
        {!hasQuery && <div>Type something to search...</div>}
        {hasQuery && loading && <div>Searching...</div>}
        {error ? (
          <div>Error occurred</div>
        ) : (
          <ul>
            {items.map((o) => (
              <li key={o.id}>{o.name}</li>
            ))}
          </ul>
        )}
      </div>

      <Services/>
    </>
  );
}
