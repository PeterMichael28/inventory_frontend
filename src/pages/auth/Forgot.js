import React, { useState } from "react";
import styles from "./auth.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { forgotPassword, validateEmail } from "../../services/authService";
import { toast } from "react-toastify";

const Forgot = () => {

  
  const initialState = {
    email: ''

  }

  const [ formData, setformData ] = useState( initialState )
  
  const {email} = formData

  const handleInputChange = ( e ) => {
    const {name, value} = e.target
    setformData({...formData, [name]: value})
  }

  const handleSubmit =async  (e) => {
    e.preventDefault()
    // const {name, email, password, password1} = formData
    if ( !email ) {
      return toast.error("Email is required")
    }
   
    if ( !validateEmail( email ) ) {
      return toast.error("Please enter a valid email")
    }

      const userData = {email}
    try {
       await forgotPassword(userData)
     
      // toast.success(data.message)
      // console.log(data)
   
    } catch (error) {
      console.log(error)
     
    }

  }
  return (
      <div className={ `container ${ styles.auth }` }>
          <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>Forgot Password</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
           
            <button type="submit" className="--btn --btn-primary --btn-block">
              Get Reset Email
            </button>
            <div className={styles.links}>
            <Link to="/">- Home</Link>
  
            <Link to="/login">- Login</Link>
          </div>
          </form>
      

          
        </div>
      </Card>



      </div>
      
  )
}

export default Forgot