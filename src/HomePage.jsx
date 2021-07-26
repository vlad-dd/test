import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUsersThunkCreator } from "./redux/homePageReducer";

const HomePage = (props) => {
    let usersData = useSelector(state => { return state.homePageReducer})
    
    let getUsers = () => {
        props.setUsersThunkCreator();
    }
   
    useEffect(() => {
        getUsers()
    }, [usersData])

    return(
        <div>
            {usersData.users.first_name}
        </div>
    )

}

let mapStateToProps = (state) => {
    return {
        usersData: state.homePageReducer.users
    }
}




export default connect(mapStateToProps, {setUsersThunkCreator:setUsersThunkCreator})(HomePage);