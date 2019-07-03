import React from 'react'
import FancyButton from '../../components/FancyButton'

// const FancyButton = React.forwardRef((props, ref) => (
//   <button ref={ref} className='FancyButton'>
//     {props.children}
//   </button>
// ))

class App extends React.Component {
  render () {
    const ref = React.createRef()
    return (
      <div>
        <FancyButton label='click me' handleClick={() => { console.log(11) }} ref={ref} />
        {/* <FancyButton ref={ref} onClick={() => {
          console.log(ref.current)
        }}>Click me!</FancyButton>
        <button onClick={() => {
          console.log(ref.current)
        }}>click!!!</button> */}
      </div>
    )
  }
}

export default App
