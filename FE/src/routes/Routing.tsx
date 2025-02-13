import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/client/Homepage/Homepage'
import LayoutClient from '../layouts/LayoutClient'
import { dashboard, home, login, register } from '../constants/path'
import LayoutAdmin from '../layouts/LayoutAdmin'
import Dashboard from '../pages/admin/Dashboard'

const Routing = () => {
  return (
    <Routes>
      {/* CLIENT */}
      <Route path={home} element={<LayoutClient />}>
        <Route index element={<Homepage />} />
      </Route>

      {/* ADMIN */}
      <Route path={dashboard} element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
      </Route>

      {/* Auth */}
      <Route path={login} element={<div>Login</div>} />
      <Route path={register} element={<div>Register</div>} />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default Routing