import axios from 'axios';
import {toast} from 'react-toastify'

export const backendUrl = process.env.REACT_APP_BACKEND_URL;

//register user
export const registerUser = async (userData) => {

    try {
        const response = await axios.post( `${ backendUrl }/api/users/register`, userData, {withCredentials: true} )
        if ( response.statusText === 'Created' ) {
            toast.success( "Registration Successful" )
            return response.data
        }
        // return response
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();

        toast.error(message)
    }
};

//user login
export const loginUser = async (userData) => {

    try {
        const response = await axios.post( `${ backendUrl }/api/users/login`, userData, {withCredentials: true} )
        if ( response.statusText === 'OK' ) {
            toast.success( "Login Successful" )
            return response.data
        }
        // return response
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();

        toast.error(message)
    }
};

//forgot password
//user login
export const forgotPassword = async (userData) => {

    try {
        const response = await axios.post( `${ backendUrl }/api/users/forgotpassword`, userData, {withCredentials: true} )
        if ( response.statusText === 'OK' ) {
            toast.success( response.data.message )
            return response.data
        }
       
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();

        toast.error(message)
    }
};

//logout User
export const logoutUser = async () => {
    try {
        const response = await axios.get( `${ backendUrl }/api/users/logout`, {withCredentials: true} )
   if ( response.statusText === 'OK' ) {
            toast.success( response.data.message )
            return response.data
        }
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();

        toast.error(message)
    }
}

//reset password
export const resetPassword = async (userData, resetToken) => {

    try {
        const response = await axios.put( `${ backendUrl }/api/users/resetpassword/${resetToken}`, userData, {withCredentials: true} )
        if ( response.statusText === 'OK' ) {
            toast.success( response.data.message )
            return response.data
        }
      
       
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();

        toast.error(message)
    }
};

//checking login status
export const loginStatus = async () => {
    try {
        const response = await axios.get( `${ backendUrl }/api/users/loggedin`)
        if ( response.statusText === 'OK' ) {
            // toast.success( 'Welcome back' )
            return response.data
        }
      
       
    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();

        // toast.error(message)
    }
}


// Get User Profile
export const getUser = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/users/getUser`);
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
    }
};
  

  // Update Profile
  export const updateUser = async (formData) => {
    try {
      const response = await axios.patch(
        `${backendUrl}/api/users/updateprofile`,
        formData
      );
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
    }
  };


  // change password
  export const changePassword = async (formData) => {
    try {
      const response = await axios.patch(
        `${backendUrl}/api/users/updatepassword`,
        formData
      );
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
    }
  };

///email validation
export const validateEmail = ( email ) => {
    return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}