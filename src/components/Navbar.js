import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }



  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  componentWillUpdate(){
    if(this.state.navBarActiveClass == 'is-active') {
      document.body.style.position = 'static'
    }
  }
  componentDidUpdate(){
    if(this.state.navBarActiveClass == 'is-active') {
      document.body.style.position = 'fixed'
    }
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className={`navbar-inner navbar ${this.state.navBarActiveClass}`}>
          <div className="container">
            <div
              className="nav-holder"
            >
              <div className="nav-links">
                <Link className="navbar-item navbar-item-1" to="/">
                  <img src={logo}/>
                </Link>
                <Link className="navbar-item navbar-item-2" to="/about">
                  About
                </Link>
                <Link className="navbar-item navbar-item-3" to="/shows">
                  Music
                </Link>
                <Link className="navbar-item navbar-item-3" to="/shows">
                  Shows
                </Link>
                <Link className="navbar-item navbar-item-4" to="/products">
                  Products
                </Link>
                <Link className="navbar-item navbar-item-5" to="/blog">
                  News
                </Link>
                <Link className="navbar-item navbar-item-6" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Hamburger menu */}
        <div
          className={`ham-menu ${this.state.navBarActiveClass}`}
          data-target="navMenu"
          onClick={() => this.toggleHamburger()}
        >
          <span />
          <span />
          <span />
        </div>
      </nav>
    )
  }
}

export default Navbar
