import { useState } from 'react'
import './App.css'

import { Menu } from './components/menu'
import { Home } from './components/home'

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
        < Menu className="bg-image" />
        <div className="content">
          < Home />
        </div>
      </body>
    </>
  )
}

export default App
