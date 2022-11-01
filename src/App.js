import { Routes, Route } from 'react-router-dom'
// import {useContext} from 'react'
import { useSelector } from 'react-redux'



import Header from './components/layout/Header'
import Auth from './components/Auth'
import Home from './components/pages/Home'
import All from './components/pages/All'
import Flats from './components/pages/Flats'
import Sneakers from './components/pages/Sneakers'
import Platforms from './components/pages/Platforms'
import Search from './components/pages/Search'
import DetailProduct from './components/pages/DetailProduct'


import Profile from './components/Profile'
import { Footer } from './components/layout/Footer'
import { Cart } from './components/Cart'
import Wishlist from './components/pages/Wishlist'
import User from './components/pages/User'
import './App.css';
import NotFound from './components/pages/NotFound'
import Orders from './components/Orders'
import ThankYou from './components/pages/ThankYou'

function App() {
  const token = useSelector(state => state.auth.token)


  return (
    <div className="App">
			<Header />
			<main className="main-content">
				<Routes>
          <Route index element={<Home />}></Route>
					<Route path="/all" element={<All />} />
					<Route path="/flats" element={<Flats />} />
					<Route path="/platforms" element={<Platforms />} />
					<Route path="/sneakers" element={<Sneakers />} />
					<Route path="/search" element={<Search />} />

					<Route path="/auth" element={<Auth />} />
					{token && (
					<Route path="/user" element={<User />}>
						<Route index element={<Profile />}/>
						<Route path="profile" element={<Profile />}/>
						<Route path="orders" element={<Orders />}/>
						<Route path="wishlist" element={<Wishlist />}/>
						<Route path="*" element={<NotFound />} />
					</Route>
					)}
					<Route path="/product-detail/:id" element={<DetailProduct />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<ThankYou />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer></Footer>
    </div>
  );
}

export default App;
