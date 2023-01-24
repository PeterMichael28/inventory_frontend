import React from 'react'
import {RiProductHuntLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';
// import './fuller/Home.css'
import './Home.scss'

const Home = () => {
  return (
    <main className="home">
      {/* nav section */}
      <nav className="container --flex-between">
        <div className="logo">
          <RiProductHuntLine size={ 35 } />
        </div>
        <ul className="home-links">
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <button className='--btn --btn-primary'>
            <Link to='/login'>Login</Link>
            </button>
          </li>
          
          <li>
            <button className='--btn --btn-primary'>
            <Link to='/dashboard'>Dashboard</Link>
            </button>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}

      <section className="hero container">
        <div className="hero-text">
          <h2>Inventory {"&"} Stock Management</h2>
          p
        </div>
      </section>
    </main>
  )
}

export default Home