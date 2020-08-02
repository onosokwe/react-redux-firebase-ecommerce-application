import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api'
})

// return the user data from the session storage
export const getUser = () => {
    const userStr = sessionStorage.getItem('message');
    if (userStr) return JSON.stringify(userStr);
    else return null;
}
   
// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('message') || null;
}
   
// remove the token and user from the session storage
export const removeUserSession = () => {
    sessionStorage.removeItem('message');
    sessionStorage.removeItem('user');
}
   
// set the token and user from the session storage
export const setUserSession = (message, user) => {
    sessionStorage.setItem('message', message);
    sessionStorage.setItem('user', JSON.stringify(user));
}