import './App.css'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from './pages/Homepage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App