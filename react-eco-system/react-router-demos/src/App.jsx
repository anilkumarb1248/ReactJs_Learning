import './App.css'
import React from 'react'

import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
// import AboutPage from './components/AboutPage'
import ProfilePage from './components/ProfilePage'
import NavBar from './components/NavBar'
import OrderSummary from './components/OrderSummary'
import NoRouteMatch from './components/NoRouteMatch'
import Producst from './components/Producst'
import NewProducts from './components/NewProducts'
import FeaturedProducts from './components/FeaturedProducts'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import AdminComp from './components/AdminComp'
import { AuthProvider } from './components/Authentication'
import Login from './components/Login'
import RequireAuth from './components/RequireAuth'

const LazyAbout = React.lazy(() => import('./components/AboutPage'))

function App() {
  return (
    <div>
      <AuthProvider>
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/about' element={<AboutPage />} /> */}
          {/* <Route path='about' element={<AboutPage />} /> */}
          <Route path='about' element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          } />
          <Route path='profile' element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          } />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='products' element={<Producst />}>
            <Route index element={<FeaturedProducts />} />
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
          {/* <Route path="users" element={<Users/>} />
        <Route path="users/:userId" element={<UserDetails/>} />
        <Route path="users/admin" element={<AdminComp/>} /> */}
          <Route path="users" element={<Users />} >
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<AdminComp />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path="*" element={<NoRouteMatch />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}
export default App
