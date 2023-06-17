import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgContColor = isDarkTheme ? 'dark-bg-cont' : 'light-bg-cont'
      const heading = isDarkTheme ? 'dark-h1' : 'light-h1'
      const paragraph = isDarkTheme ? 'dark-p' : 'light-p'

      return (
        <div className={`bg-container ${bgContColor}`}>
          <Navbar />
          <div className="not-found-container">
            <img
              className="not-found-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={heading}> Lost Your Way? </h1>
            <p className={paragraph}>
              {' '}
              We cannot seem to find the page you are looking for.{' '}
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
