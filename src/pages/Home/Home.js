import React from "react";
import { TbLetterM } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/authService";
import { SET_LOGIN } from "../../store/features/auth/authSlice.js";





const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logout = async () => {
    const res =  await logoutUser();
      await dispatch( SET_LOGIN( false ) );
      // toast.success(res.message)
      // console.log(res)
      navigate("/login");
    };
  

  
  // console.log('Home', isLoggedIn)
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <TbLetterM size={35} />
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
            <li>
            <button onClick={logout} className="--btn --btn-danger header-btn">
          Logout
        </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management Solution</h2>
          <p>
            Inventory system to control and manage proucts in the warehouse in
            real timeand integrated to make it easier to develop your business.
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Free Trial 1 Month</Link>
            </button>
          </div>
          <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
