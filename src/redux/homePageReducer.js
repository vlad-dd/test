import { userAPI } from "../API";
import axios from "axios";
const SET_USERS = 'SET_USERS';


let initialState = {
    users: []
    
}



const homePageReducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type) {
        case SET_USERS:
            stateCopy = {
                ...state,
                users: action.newUser
            }
            return stateCopy;

        default:
            return state

    }
}

export const setUsersActionCreator = (userData) => {
    return {
        type: SET_USERS,
        newUser: userData
    }
}

export const setUsersThunkCreator = (usersData) => {
    return (dispatch) => {
        userAPI.getUsers().then((response) => {
            dispatch(setUsersActionCreator(response.data.data))
            console.log(response.data.data)
        })
    }
}

    

export default homePageReducer