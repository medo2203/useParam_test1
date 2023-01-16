import './App.css'
import Cards from './components/Cards/Cards.jsx'
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cards/>
      </div>
    </BrowserRouter>
  )
}

export default App
