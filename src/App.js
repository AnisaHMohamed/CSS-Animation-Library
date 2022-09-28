import './App.css';
import  AnimationPreview from './components/AnimationPreview'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AnimationPreview animationName={"Spin"}/>
      <p>
          Welcome to a my CSS animations Libray!
        </p>
       
      </header>
    </div>
  );
}

export default App;
