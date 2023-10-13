import { call, put, spawn, take, takeLatest } from 'redux-saga/effects'
import {getServiceDetails, getServices} from "../api";
import {servicesDetails, servicesFailure, servicesRequest, servicesSuccess} from "../actions/actionCreators";
import {CHANGE_ID_SERVICE, GET_SERVICES, SEARCH_SKILLS_REQUEST, SERVICES_REQUEST} from "../actions/actionTypes";

function* handleServicesSaga() {
  try {
    yield put(servicesRequest())
    const data = yield call(getServices)
    yield put(servicesSuccess(data))
  } catch (e) {
    yield put(servicesFailure(e.message))
  }
}

function* handleGetServiceSaga(action) {
  try {
    yield put(servicesRequest())
    const data = yield call(getServiceDetails, action.payload.id)
    yield put(servicesDetails(data))
  } catch (e) {
    yield put(servicesFailure(e.message))
  }
}

function* watchServicesSaga() {
  yield takeLatest(GET_SERVICES, handleServicesSaga)
}

function* watchIdServiceSaga() {
  yield takeLatest(CHANGE_ID_SERVICE, handleGetServiceSaga)
  /*const data = yield call(getServiceDetails(action.payload.id))
  yield take(servicesDetails(data))*/
}

export default function* servicesSaga() {
  yield spawn(watchServicesSaga)
  yield spawn(watchIdServiceSaga)
}