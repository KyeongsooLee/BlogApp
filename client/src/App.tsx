import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Routes instead of Switch
import { useDispatch } from 'react-redux'

import PageRender from './PageRender'
import Header from './components/global/Header'
import Footer from './components/global/Footer'

import { Alert } from './components/alert/Alert'
import { refreshToken } from './redux/actions/authAction'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshToken())
  },[dispatch])

  return (
    <div className='container'>
      <Router>
        <Alert />
        <Header />

        <Routes>
          <Route path="/" element={<PageRender />} />
          <Route path="/:page" element={<PageRender />} />
          <Route path="/:page/:slug" element={<PageRender />} />
        </Routes>

        <Footer/>
      </Router>
    </div>
  )
}

export default App