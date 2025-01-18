import * as api from '../api';
import { setcurrentuser } from './currentuser';
import { fetchallusers } from './users';
export const signup =(authdata,naviagte)=> async(dispatch)=>{
    try {
        const{data}=await api.signup(authdata);
        dispatch({type:"AUTH",data})
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))));
        dispatch(fetchallusers())
        naviagte("/")
    } catch (error) {
        console.log(error)
    }
}
export const login = (authdata, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(authdata);
        console.log("Login successful:", data); // Debugging
        dispatch({ type: "AUTH", data });
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))));
        navigate("/");
    } catch (error) {
        console.error("Login failed:", error.response?.data || error.message); // Debugging
    }
};
