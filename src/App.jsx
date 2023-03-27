import { useState } from 'react'
import './App.css'

import { Menu } from './components/menu'
import { Home } from './components/home'
import { Tech } from './components/tech'

import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </head>
      <body>
        <div className='header'>
        < Menu className="bg-image" />
        {/* <div className="content"> */}
          < Home />
        </div>
        <div className='bg-tech'>
          < Tech />
        </div>
        {/* </div> */}
      </body>
    </>
  )
}

export default App
