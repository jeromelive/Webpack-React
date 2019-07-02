import React from 'react'
import { ThemeContext } from '../lib/theme-context'

function ThemeTogglerButton () {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        return (
          <button
            onClick={toggleTheme}>
          Toggle Theme
          </button>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ThemeTogglerButton
