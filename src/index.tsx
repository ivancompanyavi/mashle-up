import React from 'react'
import ReactDOM from 'react-dom'

import './serve'

const App: React.FC = () => {
  return <h1>Hello, world!</h1>
}

ReactDOM.render(<App />, document.getElementById('app'))
