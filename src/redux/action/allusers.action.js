import axios from "../helper/axios";
import { authConstants } from "./constants";

export const getAllUsers = () => {
    return async (dispatch) => {
      dispatch({
        type: authConstants.GET_USERS_REQUEST
      });
      await axios.get(`/get-users`).then(function (response) {
        dispatch({
          type: authConstants.GET_USERS_SUCCESS,
          payload: {
            allusers: response.data.users,
            message: response.data.message
          }
        })
      }).catch(function (error) {
        dispatch({
          type: authConstants.GET_USERS_FAILURE,
          payload: {
            error: error.data.errors,
          }
        })
      });
    }
  }