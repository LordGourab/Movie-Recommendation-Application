import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [searchTerm, setSearchterm] = useState('');

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> Hassle-Free</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchterm={setSearchterm}/>
      </div>
    </main>
  )
}

export default App
