import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { MainLayout } from './layouts/main-layout'
import { BookDetail } from '@/pages/book-detail'
const App = () => {
  // if you have other pages, you just need to add React-router-dom
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<BookDetail />} />
      </Route>
    </Routes>
  )
}

export default App