import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_SUCCESS,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE,
  SERVICES_REQUEST,
  SERVICES_FAILURE,
  SERVICES_SUCCESS, SERVICES_DETAIL, CHANGE_ID_SERVICE, GET_SERVICES,
} from './actionTypes'

export function searchSkillsRequest(search) {
  return { type: SEARCH_SKILLS_REQUEST, payload: { search } }
}

export function searchSkillsSuccess(items) {
  return { type: SEARCH_SKILLS_SUCCESS, payload: { items } }
}

export function searchSkillsFailure(error) {
  return { type: SEARCH_SKILLS_FAILURE, payload: { error } }
}

export function changeSearchField(search) {
  return { type: CHANGE_SEARCH_FIELD, payload: { search } }
}

export function getServices(items) {
  return { type: GET_SERVICES, payload: { items } }
}

export function servicesSuccess(items) {
  return { type: SERVICES_SUCCESS, payload: { items } }
}

export function servicesFailure(error) {
  return { type: SERVICES_FAILURE, payload: { error } }
}

export function servicesRequest() {
  return { type: SERVICES_REQUEST }
}

export function changeIdService(id) {
  return { type: CHANGE_ID_SERVICE, payload: { id } }
}

export function servicesDetails(item) {
  return { type: SERVICES_DETAIL, payload: { item } }
}