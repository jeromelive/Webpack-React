import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { ThemeContext, themes } from './lib/theme-context'
import ThemeButton from "./components/ThemeButton"

const Home = lazy(() => import('./pages/home'))
const About =  lazy(() => import('./pages/about'))
const Users =  lazy(() => import('./pages/users'))
// const ThemeButton =  lazy(() => import('./components/ThemeButton'))

class AppRouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light
    }
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleTheme() {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }))
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>home</Link>
                </li>
                <li>
                  <Link to='/about'>about</Link>
                </li>
                <li>
                  <Link to='/users'>users</Link>
                </li>
              </ul>
            </nav>
  
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path='/' exact component={Home} changeTheme={this.toggleTheme} />
                <Route path='/about' component={About} />
                <Route path='/Users' component={Users} />
              </Switch>
            </Suspense>
          </div>
        </Router>
        <ThemeButton changeTheme={this.toggleTheme}>1</ThemeButton>
      </ThemeContext.Provider>
    )
  }
}

export default AppRouter
