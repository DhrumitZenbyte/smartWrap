import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  TOKEN
} from "./actionTypes"

const initialState = {
  error: "",
  loading: false,
  token: null,
  email: "",
  name: "",
}

const login = (state = initialState, action) => {
  console.log("Reducer received action:", action);

  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
      }
      break
    case TOKEN:
      console.log("Updating state with:", action.payload);

      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        token: action.payload.token,
      };
    case LOGIN_SUCCESS:
      state = {
        ...state,
        loading: false,
        isUserLogout: false,
      }
      break
    case LOGOUT_USER:
      state = { ...state }
      break
    case LOGOUT_USER_SUCCESS:
      state = { ...state , isUserLogout: true}
      break
    case API_ERROR:
      state = { ...state, error: action.payload, loading: false,isUserLogout: false, }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default login
