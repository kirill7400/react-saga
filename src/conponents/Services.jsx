import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {changeIdService, getServices} from "../actions/actionCreators";
import {useEffect} from "react";

export default function Services() {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector(
    (state) => state.services
  );

  useEffect(() => {
    dispatch(getServices())
  }, []);

  return(
    <div className='Services'>
      {
        error ?
          <div>Error! <button onClick={() => dispatch(getServices())}>Повторить запрос</button></div> :
          loading ?
            <div>Loading...</div> :
            <div className='ServicesList'>
              { items.map(item => <NavLink key={item.id} target="_blank" to={'/' + item.id + '/details'}>{ item.name }</NavLink>) }
            </div>
      }
    </div>
  )
}