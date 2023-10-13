import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import skillsReducer from '../reducers/skills'
import servicesReducer from "../reducers/services";
import skillsSaga from "../sagas/skillsSaga";
import servicesSaga from "../sagas/servicesSaga";

const reducer = combineReducers({
  skills: skillsReducer,
  services: servicesReducer
})


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(skillsSaga)
sagaMiddleware.run(servicesSaga)

export default store
