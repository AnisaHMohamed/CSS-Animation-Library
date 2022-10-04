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
  let blink =   animations['Blink']()
  let border =   animations['Border']()
  // let bounce =   animations['Bounce']()
   let breathe =   animations['Breathe']()
  // let floatingBubble =   animations['FloatingBubble']()
  // let glowingRingsOverlap =   animations['GlowingRingsOverlap']()
  // let jiggle =   animations['Jiggle']()
  // let pulse =   animations['Pulse']()
   let spin =   animations['Spin']()
  // <Route  path="/bounce" element={bounce}/>
  // <Route  path="/floatingBubble" element={floatingBubble}/>
  // <Route  path="/glowingRingsOverlap" element={glowingRingsOverlap}/>
  // <Route  path="/jiggle" element={jiggle}/>
  // <Route  path="/pulse" element={pulse}/>
  // <Route  path="/spin" element={spin}/>
  return (
    <div className="App">
    <BrowserRouter >
    <header className="App-header">
    <Routes>
    <Route  path="/test" element={<Test/>}/>
    <Route  path="/" element={<Home/>}/>
    <Route  path="/breathe" element={breathe}/>
    <Route  path="/blink" element={blink}/>
    <Route  path="/border" element={border}/>
    <Route  path="/spin" element={spin}/>
   
    
    </Routes>
    </header>


    </BrowserRouter>
    </div>
    );
}

export default App;
