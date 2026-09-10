import { Route, Routes } from 'react-router-dom'
import './App.css'
import TopNavi from './declarative/nav1/TopNavi'
import Home from './declarative/nav1/Home'
import NotFound from './declarative/nav1/NotFound'
import LayoutIndex from './declarative/nav1/LayoutIndex'
import CommonLayout from './declarative/nav1/CommonLayout'
import RouterHooks from './declarative/nav1/RouterHooks'

function App() {
  return (
    <>
      <TopNavi />
      <Routes>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/intro' element={<CommonLayout/>}>
          <Route index element = {<LayoutIndex/>}/>
          <Route path='router' element = {<RouterHooks/>}/>
        </Route>
        <Route path='*' element= {<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
