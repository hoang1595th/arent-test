 
import './App.css'
import Layout from './layout'
import { Routes, Route } from 'react-router-dom'
import { routes } from './router/routes'

function App() {
  

  return (
    <Layout>
      <Routes>
        {routes.map((r, idx) => (
          <Route key={idx} path={r.path} element={r.element} />
        ))}
      </Routes>
    </Layout>
  )
}

export default App
