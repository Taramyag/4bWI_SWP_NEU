import { useState } from 'react'
import './App.css'

import './App.css'
import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Willkommen</h1>
      <div className='class-container'>
        <Card />
        <Card2
          name="Aleksandar"
          image="https://picsum.photos/200/300"
          description="This is a description"
          author="Aleksandar"
        />

        <Card3

          image="https://picsum.photos/200/300"
          image2="https://picsum.photos/200/300"
          image3="https://picsum.photos/200/300"
          image4="https://picsum.photos/200/300"

        />



      </div>
    </>
  )
}

export default App
