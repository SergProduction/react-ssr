import { api } from '../api'

const sports = (sportsList) => ({
  type: 'sports',
  payload: sportsList
})

export const counter = (counter) => ({
  type: 'counter',
  payload: counter
})


export const fetch = {
  sports: () => async (dispatch) => {
    const sportList = await api.sportList()
  
    dispatch(sports(sportList))
  },
}
