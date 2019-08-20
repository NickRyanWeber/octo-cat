import React, { Component } from 'react'
import Header from './components/Header.jsx'
import OctoCats from './components/OctoCats.jsx'

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <OctoCats />
      </main>
    )
  }
}

export default App
