import {
  SERVICES_REQUEST,
  SERVICES_FAILURE,
  SERVICES_SUCCESS, SERVICES_DETAIL, CHANGE_ID_SERVICE, GET_SERVICES,
} from '../actions/actionTypes'

const initialState = {
  id: '',
  items: [],
  item: {},
  loading: false,
  error: null,
};

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICES_REQUEST:
      return { ...state, loading: true, error: null };
    case SERVICES_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case SERVICES_SUCCESS:
      const { items } = action.payload;
      return { ...state, items, loading: false, error: null };
    case CHANGE_ID_SERVICE:
      const { id } = action.payload;
      return { ...state, id };
    case GET_SERVICES:
      return state;
    case SERVICES_DETAIL:
      const { item } = action.payload;
      return { ...state, item, loading: false, error: null };
    default:
      return state;
  }
}