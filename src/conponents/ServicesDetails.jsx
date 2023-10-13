import {useDispatch, useSelector} from "react-redux";
import {changeIdService} from "../actions/actionCreators";
import {useEffect} from "react";


export default function ServicesDetails() {
  const dispatch = useDispatch()
  const { id, item, items, error, loading } = useSelector(
    (state) => state.services
  );

  useEffect(() => {
    dispatch(changeIdService(window.location.pathname[1]))
  }, []);

  console.log(id, item, items)

  return (
    <div className='servicesDetails'>
      {
        error ? <div>Error</div> :
          loading ? <div>Loading...</div> :
          <ul>
            <li>ID: { item.id }</li>
            <li>Название: { item.name }</li>
            <li>Цена: { item.price }</li>
            <li>Описание: { item.content }</li>
          </ul>
      }
    </div>
  )
}