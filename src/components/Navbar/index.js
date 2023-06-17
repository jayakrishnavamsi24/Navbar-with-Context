import {Link} from 'react-router-dom'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navTheme = isDarkTheme ? 'dark-navbar' : 'light-navbar'
      const navLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const linkTheme = isDarkTheme ? 'dark-link' : 'light-link'
      const themeSwitch = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const onToggleTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={`navbar ${navTheme}`}>
          <img src={navLogo} alt="website logo" />
          <ul>
            <Link to="/" className={linkTheme}>
              <li> Home </li>
            </Link>
            <Link to="/about" className={linkTheme}>
              <li> About </li>
            </Link>
          </ul>
          <button
            type="button"
            data-testid="theme"
            className="theme-btn"
            onClick={onToggleTheme}
          >
            <img src={themeSwitch} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
