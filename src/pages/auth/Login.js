import React, { useState } from "react";
import styles from "./auth.module.scss";
import { BiLogIn } from "react-icons/bi";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser,validateEmail } from "../../services/authService";
import { useDispatch } from "react-redux";
import { selectIsLoggedIn, SET_LOGIN, SET_NAME } from "../../store/features/auth/authSlice.js";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()  


  const initialState = {
    email: '',
    password: ''

  }

  // useEffect( () => {
  //   if ( isLoggedIn === true ) {
  //     navigate( '/dashboard' )
      

  //   }
  //   // console.log(isLoggedIn)
  // }, [])

  const [isLoading, setIsLoading] = useState(false)
  const [ formData, setformData ] = useState( initialState )
  
  const {email, password} = formData

  const handleInputChange = ( e ) => {
    const {name, value} = e.target
    setformData({...formData, [name]: value})
  }

  const handleSubmit =async  (e) => {
    e.preventDefault()
    // const {name, email, password, password1} = formData
    if ( !email | !password ) {
      return toast.error("All fields are required")
    }
    if ( password.length < 6 ) {
      return toast.error("Password must be at least 6 characters")
    }
     
    if ( !validateEmail( email ) ) {
      return toast.error("Please enter a valid email")
    }

      const userData = {email, password}
    setIsLoading( true )
    try {
      const data = await loginUser( userData )
      if ( data ) {
        await dispatch( SET_LOGIN( true ) )
        await dispatch(SET_NAME(data.name))
       navigate('/dashboard')
      }
      // console.log(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }

  }

  return (
    <div className={ `container ${ styles.auth }` }>
      {isLoading && <Loader />}
          <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>
          <Link to="/forgot">Forgot Password</Link>

          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Don't have an account? &nbsp;</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>



      </div>
      
  )
}

export default Login