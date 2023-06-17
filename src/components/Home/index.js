import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgContColor = isDarkTheme ? 'dark-bg-cont' : 'light-bg-cont'
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const heading = isDarkTheme ? 'dark-h1' : 'light-h1'

      return (
        <div className={`bg-container ${bgContColor}`}>
          <Navbar />
          <div className="home-container">
            <img className="home-img" src={homeImg} alt="home" />
            <h1 className={heading}> Home </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
