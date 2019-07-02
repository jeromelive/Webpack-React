import React, { Fragment, Suspense } from 'react'
import { add } from '../lib/utils'
import { ThemeContext } from '../lib/theme-context'

const OtherComponent = React.lazy(() => import('../components/OtherComponent'))

class App extends React.Component {
  componentDidMount () {
    // import('../lib/utils').then(utils => {
    //   console.log(utils.add(1,2))
    // })
    console.log(add(1, 2))
  }
  render () {
    console.log(this.context)
    return (
      <div>
        <h2>Home</h2>
        <Fragment>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent index='11' />
        </Suspense>
      </div>
    )
  }
}

App.contextType = ThemeContext

export default App
