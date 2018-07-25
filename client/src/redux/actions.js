import cookie from 'js-cookie'
import { api } from '../api'

const sports = (sportsList) => ({
  type: 'sports',
  payload: sportsList
})

export const counter = (counter) => {
  cookie.set('counter', counter)
  return {
    type: 'counter',
    payload: counter
  }
}


export const fetch = {
  sports: () => async (dispatch) => {
    const sportList = await api.sportList()
  
    dispatch(sports(sportList))
  },
}
