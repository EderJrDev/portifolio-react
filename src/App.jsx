import { useState } from 'react'
import './App.css'

import { Menu } from './components/menu'
import { Home } from './components/home'
import { Tech } from './components/tech'
import { Projects } from './components/projects'
import { Progress } from './components/progress'

import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div className='header'>
        < Menu className="bg-image" />
        {/* <div className="content"> */}
        < Home />
      </div>
      <div className='bg-black'>
        < Tech />
      </div>
      <div>
        <Progress />
      </div>
      <div>
        < Projects />
      </div>
      {/* </div> */}
    </>
  )
}

export default App
