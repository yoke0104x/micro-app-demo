/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2023-12-29 10:34:50
 */
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './layouts'
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App