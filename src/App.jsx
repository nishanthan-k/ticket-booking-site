import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Search from "./pages/search/Search"
import Hotel from './pages/hotel/Hotel'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/search" Component={Search}></Route>
        <Route path="/search/hotel/:id" Component={Hotel}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App