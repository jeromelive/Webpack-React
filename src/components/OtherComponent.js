import React from 'react'
import { ThemeContext } from '../lib/theme-context'

class OtherComponent extends React.Component {
  render () {
    console.log(this.context)
    return (
      <div>{this.props.index}</div>
    )
  }
}

OtherComponent.contextType = ThemeContext

export default OtherComponent
