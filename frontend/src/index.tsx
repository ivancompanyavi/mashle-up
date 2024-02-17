import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './profile'

import './serve'

const App: React.FC = () => {
  return (
    <div>
      <h1>App</h1>
      <Profile />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
