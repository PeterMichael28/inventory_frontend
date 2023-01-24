import React, { useState } from "react";
import styles from "./auth.module.scss";
import { MdPassword } from "react-icons/md";
import Card from "../../components/card/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../services/authService";

const Reset = () => {

  const navigate = useNavigate()

  const { resetToken} = useParams()
  const initialState = {
    password: '',
    password2: ''

  }

  
  const [ formData, setformData ] = useState( initialState )
  
  const {password2, password} = formData

  const handleInputChange = ( e ) => {
    const {name, value} = e.target
    setformData({...formData, [name]: value})
  }

  const handleSubmit =async  (e) => {
    e.preventDefault()

 
    if ( password.length < 6 ) {
      return toast.error("Password must be at least 6 characters")
    }
    if ( password !== password2 ) {
      return toast.error("password do not match")
    }
  

    const userData = { password }
    

    // setIsLoading( true )
    try {
      const data = await resetPassword(userData, resetToken)
    // console.log(data)
     navigate('/login')
      // setIsLoading(false)
    } catch (error) {
      console.log(error)
      // setIsLoading(false)
    }

  }
  return (
      <div className={ `container ${ styles.auth }` }>
          <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="New Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
                      />
                       <input
              type="password"
              placeholder="Confirm New Password"
              required
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />
           
            <button type="submit" className="--btn --btn-primary --btn-block">
              Reset Password
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

export default Reset