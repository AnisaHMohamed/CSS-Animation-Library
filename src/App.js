import './App.css';
import {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Test from './routes/testview'
import {animations} from './components/animations'

function App() {
  // const [animationRoutes, setAnimationRoute] = useState(null)
  const animationRoutes = []

  useEffect(() => { 
    console.log(animations)
    
  },[]) 
  for (let animation in animations) {
    let currentAnimation = animations[animation]
    console.log(currentAnimation)
    animationRoutes.push(`<Route  path="/${animation}" element={${currentAnimation}}/>`)
  }
  console.log(animationRoutes, '<--')
 let spin =   animations['Spin']()
  return (
    <div className="App">
    <BrowserRouter >
    <header className="App-header">
    <Routes>
    <Route  path="/test" element={<Test/>}/>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/spin" element={spin}/>

    </Routes>
    </header>


    </BrowserRouter>
    </div>
    );
}

export default App;
