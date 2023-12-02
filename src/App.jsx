import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/hotels" Component={List}></Route>
        <Route path="/hotels/:id" Component={Hotel}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App