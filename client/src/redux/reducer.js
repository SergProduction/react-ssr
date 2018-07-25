export const initState = {
  sports: [],
  counter: 0,
}


export default function (state, action) {
  switch (action.type) {
    case 'sports' : {
      return { ...state, sports: action.payload }
    }
    case 'counter' : {
      return { ...state, counter: action.payload }
    }
    default : {
      return state
    }
  }
}