import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Headline from './components/headline/Headline'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Headline header="Posts" desc="Click the button to render posts" />
      </main>
    </div>
  )
}

export default App
