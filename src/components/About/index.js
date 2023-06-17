import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgContColor = isDarkTheme ? 'dark-bg-cont' : 'light-bg-cont'
      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const heading = isDarkTheme ? 'dark-h1' : 'light-h1'

      return (
        <div className={`bg-container ${bgContColor}`}>
          <Navbar />
          <div className="about-container">
            <img className="about-img" src={aboutImg} alt="about" />
            <h1 className={heading}> About </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
