import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Headline from './components/headline/Headline'
import PostList from './components/posts/PostList'

const tempArr = [{
  fName: 'John',
  lName: 'Doe',
  email: 'john@doe.com',
  age: 24,
  onlineStatus: true
}]

function App() {
  return (
    <div>
      <Header />
      <main>
        <Headline header="Posts" desc="Click the button to render posts" users={tempArr} />
        <PostList />
      </main>
    </div>
  )
}

export default App
