import * as axios from "axios";

export const userAPI = {
    getUsers() {
        return (axios.get('https://reqres.in/api/users/10'))
    }
}