import React from 'react'
import { ThemeContext } from '../lib/theme-context'

class ThemedButton extends React.Component {
  componentDidMount () {
    throw new Error('I crashed!')
  }
  render () {
    let props = this.props
    let theme = this.context
    return (
      <button
        onClick={props.changeTheme}
        style={{ backgroundColor: theme.theme.background }}
      />
    )
  }
}
ThemedButton.contextType = ThemeContext

export default ThemedButton
